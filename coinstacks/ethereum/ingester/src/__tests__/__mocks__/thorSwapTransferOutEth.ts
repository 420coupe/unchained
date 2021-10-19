export default {
  tx: {
    txid: '0x77b3683104413afcf8548dd949ebb99a6c18fb7d459bf944733fd815c98e5087',
    vin: [
      {
        n: 0,
        addresses: ['0xC42effB5968C2105FEFf5c2ed61135fF68736F10'],
        isAddress: true,
      },
    ],
    vout: [
      {
        value: '1579727090000000000',
        n: 0,
        addresses: ['0xC145990E84155416144C532E31f89B840Ca8c2cE'],
        isAddress: true,
      },
    ],
    blockHash: '0x3594abf55e237072408399bc83afa438dc067f01910bf820ea1f05a3ea971f4b',
    blockHeight: 12544372,
    confirmations: 19507,
    blockTime: 1622494272,
    value: '1579727090000000000',
    fees: '2331480000000000',
    ethereumSpecific: {
      status: 1,
      nonce: 4,
      gasLimit: 80000,
      gasUsed: 38858,
      gasPrice: '60000000000',
      data:
        '0x574da7170000000000000000000000005a8c5afbcc1a58ccbe17542957b587f46828b38e000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000015ec516b2982f400000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000444f55543a3843383539424135304243323335313739374635324639353439373145314336424131463041373736313041433139374244393943344545433641333639324100000000000000000000000000000000000000000000000000000000',
    },
  },
  internalTxs: [
    {
      blockNumber: '12544372',
      timeStamp: '1622494272',
      hash: '0x77b3683104413afcf8548dd949ebb99a6c18fb7d459bf944733fd815c98e5087',
      from: '0xC145990E84155416144C532E31f89B840Ca8c2cE', // normalized to checksum format
      to: '0x5a8C5afbCC1A58cCbe17542957b587F46828B38E', // normalized to checksum format
      value: '1579727090000000000',
      contractAddress: '',
      input: '',
      type: 'call',
      gas: '44909',
      gasUsed: '0',
      traceId: '0',
      isError: '0',
      errCode: '',
    },
  ],
}
