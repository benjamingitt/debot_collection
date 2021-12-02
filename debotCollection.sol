pragma ton-solidity >=0.35.0;
pragma AbiHeader expire;
pragma AbiHeader time;
pragma AbiHeader pubkey;
// import required DeBot interfaces and basic DeBot contract.
import "Debot.sol";
import "Menu.sol";
import "Terminal.sol";
import "AddressInput.sol";
import "NumberInput.sol";


interface MintNFT {

    function Mint(uint64 number) external;

}

contract CollectionDebot is Debot {
    bytes m_icon;
    address m_wallet;
    uint128 m_number;

    function setIcon(bytes icon) public {
        require(msg.pubkey() == tvm.pubkey(), 100);
        tvm.accept();
        m_icon = icon;
    }

    /// @notice Entry point function for DeBot.
    function start() public override {
        // print string to user.
        Terminal.print(0, "Collection NFT!");
        _menu();
    }

    function _menu() private inline {
        Menu.select("Main menu", "Contract NFT?", [
            MenuItem("Mint NFT :)", "", tvm.functionId(handleMenu1)),
            MenuItem("No", "о_О", tvm.functionId(handleMenu2))
        ]);
    }

    function handleMenu1(uint32 index) public {
        AddressInput.get(tvm.functionId(startChecks), "Which wallet do you want to work with?");
    }

    function startChecks(address value) public {
        NumberInput.get(tvm.functionId(numberChecks), "Which number do you want to mint NFT?", 1, 100000);
        m_wallet = value;
	}

    function numberChecks(uint128 value) public {
        m_number = value;
        callMint();
        _menu();


	}
    function callMint() public view {
        optional(uint256) pubkey = 0;
        MintNFT(m_wallet).Mint{
            abiVer: 2,
            extMsg: true,
            sign: true,
            pubkey: pubkey,
            time: uint64(now),
            expire: 0,
            callbackId: tvm.functionId(onSuccess),
            onErrorId: tvm.functionId(onError)
        }(m_number);
    }
    

    function onSuccess(uint64 transId) public {
            Terminal.print(0, "Transaction succeeded.");
        start();
    }
    function onError(uint32 sdkError, uint32 exitCode) public {
            Terminal.print(0, "Transaction error.");

    }
    function handleMenu2(uint32 index) public {
        Terminal.print(0, "This is a wrong answer, try again =)!");
        _menu();
    }

    /// @notice Returns Metadata about DeBot.
    function getDebotInfo() public functionID(0xDEB) override view returns (
        string name, string version, string publisher, string caption, string author,
        address support, string hello, string language, string dabi, bytes icon
    ) {
        name = "NFT Collection 2.0";
        version = "2.0";
        publisher = "Radiance";
        caption = "Start develop DeBot from here";
        author = "Radiance";
        support = address.makeAddrStd(0, 0xf52f6e74454263dee8cfea3cc45745e67e27b11a37b2dd342182cbd20dc5d16e);
        hello = "Hello, i am a Collection 2.0 DeBot.";
        language = "en";
        dabi = m_debotAbi.get();
        icon = m_icon;
    }

    function getRequiredInterfaces() public view override returns (uint256[] interfaces) {
        return [Menu.ID, Terminal.ID, AddressInput.ID, NumberInput.ID];
    }
}