# FiscalResponseType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FolioSeqId** | Pointer to **int32** | Fiscal Folio sequence ID stored in queue table. | [optional] 
**RetryFiscalPrinting** | Pointer to **bool** | Flag to do the retrieval process of fiscal printing or not. | [optional] 

## Methods

### NewFiscalResponseType

`func NewFiscalResponseType() *FiscalResponseType`

NewFiscalResponseType instantiates a new FiscalResponseType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFiscalResponseTypeWithDefaults

`func NewFiscalResponseTypeWithDefaults() *FiscalResponseType`

NewFiscalResponseTypeWithDefaults instantiates a new FiscalResponseType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFolioSeqId

`func (o *FiscalResponseType) GetFolioSeqId() int32`

GetFolioSeqId returns the FolioSeqId field if non-nil, zero value otherwise.

### GetFolioSeqIdOk

`func (o *FiscalResponseType) GetFolioSeqIdOk() (*int32, bool)`

GetFolioSeqIdOk returns a tuple with the FolioSeqId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioSeqId

`func (o *FiscalResponseType) SetFolioSeqId(v int32)`

SetFolioSeqId sets FolioSeqId field to given value.

### HasFolioSeqId

`func (o *FiscalResponseType) HasFolioSeqId() bool`

HasFolioSeqId returns a boolean if a field has been set.

### GetRetryFiscalPrinting

`func (o *FiscalResponseType) GetRetryFiscalPrinting() bool`

GetRetryFiscalPrinting returns the RetryFiscalPrinting field if non-nil, zero value otherwise.

### GetRetryFiscalPrintingOk

`func (o *FiscalResponseType) GetRetryFiscalPrintingOk() (*bool, bool)`

GetRetryFiscalPrintingOk returns a tuple with the RetryFiscalPrinting field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRetryFiscalPrinting

`func (o *FiscalResponseType) SetRetryFiscalPrinting(v bool)`

SetRetryFiscalPrinting sets RetryFiscalPrinting field to given value.

### HasRetryFiscalPrinting

`func (o *FiscalResponseType) HasRetryFiscalPrinting() bool`

HasRetryFiscalPrinting returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


