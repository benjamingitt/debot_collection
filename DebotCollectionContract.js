const DebotCollectionContract = {
    abi: {
        "ABI version": 2,
        "version": "2.2",
        "header": [
            "pubkey",
            "time",
            "expire"
        ],
        "functions": [
            {
                "name": "setIcon",
                "inputs": [
                    {
                        "name": "icon",
                        "type": "bytes"
                    }
                ],
                "outputs": []
            },
            {
                "name": "start",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "handleMenu1",
                "inputs": [
                    {
                        "name": "index",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "handleMenu2",
                "inputs": [
                    {
                        "name": "index",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "getDebotInfo",
                "id": "0xDEB",
                "inputs": [],
                "outputs": [
                    {
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "name": "version",
                        "type": "string"
                    },
                    {
                        "name": "publisher",
                        "type": "string"
                    },
                    {
                        "name": "caption",
                        "type": "string"
                    },
                    {
                        "name": "author",
                        "type": "string"
                    },
                    {
                        "name": "support",
                        "type": "address"
                    },
                    {
                        "name": "hello",
                        "type": "string"
                    },
                    {
                        "name": "language",
                        "type": "string"
                    },
                    {
                        "name": "dabi",
                        "type": "string"
                    },
                    {
                        "name": "icon",
                        "type": "bytes"
                    }
                ]
            },
            {
                "name": "getRequiredInterfaces",
                "inputs": [],
                "outputs": [
                    {
                        "name": "interfaces",
                        "type": "uint256[]"
                    }
                ]
            },
            {
                "name": "getDebotOptions",
                "inputs": [],
                "outputs": [
                    {
                        "name": "options",
                        "type": "uint8"
                    },
                    {
                        "name": "debotAbi",
                        "type": "string"
                    },
                    {
                        "name": "targetAbi",
                        "type": "string"
                    },
                    {
                        "name": "targetAddr",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "setABI",
                "inputs": [
                    {
                        "name": "dabi",
                        "type": "string"
                    }
                ],
                "outputs": []
            },
            {
                "name": "constructor",
                "inputs": [],
                "outputs": []
            }
        ],
        "data": [],
        "events": [],
        "fields": [
            {
                "name": "_pubkey",
                "type": "uint256"
            },
            {
                "name": "_timestamp",
                "type": "uint64"
            },
            {
                "name": "_constructorFlag",
                "type": "bool"
            },
            {
                "name": "m_options",
                "type": "uint8"
            },
            {
                "name": "m_debotAbi",
                "type": "optional(string)"
            },
            {
                "name": "m_targetAbi",
                "type": "optional(string)"
            },
            {
                "name": "m_target",
                "type": "optional(address)"
            },
            {
                "name": "m_icon",
                "type": "bytes"
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "fdc6d788468e8d6dcd265fcf9fccc74f3ebee6d28a9e495d4211257e7f728511",
};
module.exports = { DebotCollectionContract };