# FolioTypesInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Compress** | Pointer to **bool** | Indicates folio to be use for compress bills. | [optional] 
**Credit** | Pointer to **bool** | Indicates folio type can be used for Credit bills. | [optional] 
**Fiscal** | Pointer to **bool** | Fiscal Folio indicator. | [optional] 
**FolioType** | Pointer to **string** | Folio Type. | [optional] 
**SendFiscalFolio** | Pointer to **bool** | Adding this flag at folio type level would decide to send fiscal folio (generate payload) or not. | [optional] 

## Methods

### NewFolioTypesInfoType

`func NewFolioTypesInfoType() *FolioTypesInfoType`

NewFolioTypesInfoType instantiates a new FolioTypesInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFolioTypesInfoTypeWithDefaults

`func NewFolioTypesInfoTypeWithDefaults() *FolioTypesInfoType`

NewFolioTypesInfoTypeWithDefaults instantiates a new FolioTypesInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCompress

`func (o *FolioTypesInfoType) GetCompress() bool`

GetCompress returns the Compress field if non-nil, zero value otherwise.

### GetCompressOk

`func (o *FolioTypesInfoType) GetCompressOk() (*bool, bool)`

GetCompressOk returns a tuple with the Compress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompress

`func (o *FolioTypesInfoType) SetCompress(v bool)`

SetCompress sets Compress field to given value.

### HasCompress

`func (o *FolioTypesInfoType) HasCompress() bool`

HasCompress returns a boolean if a field has been set.

### GetCredit

`func (o *FolioTypesInfoType) GetCredit() bool`

GetCredit returns the Credit field if non-nil, zero value otherwise.

### GetCreditOk

`func (o *FolioTypesInfoType) GetCreditOk() (*bool, bool)`

GetCreditOk returns a tuple with the Credit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCredit

`func (o *FolioTypesInfoType) SetCredit(v bool)`

SetCredit sets Credit field to given value.

### HasCredit

`func (o *FolioTypesInfoType) HasCredit() bool`

HasCredit returns a boolean if a field has been set.

### GetFiscal

`func (o *FolioTypesInfoType) GetFiscal() bool`

GetFiscal returns the Fiscal field if non-nil, zero value otherwise.

### GetFiscalOk

`func (o *FolioTypesInfoType) GetFiscalOk() (*bool, bool)`

GetFiscalOk returns a tuple with the Fiscal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiscal

`func (o *FolioTypesInfoType) SetFiscal(v bool)`

SetFiscal sets Fiscal field to given value.

### HasFiscal

`func (o *FolioTypesInfoType) HasFiscal() bool`

HasFiscal returns a boolean if a field has been set.

### GetFolioType

`func (o *FolioTypesInfoType) GetFolioType() string`

GetFolioType returns the FolioType field if non-nil, zero value otherwise.

### GetFolioTypeOk

`func (o *FolioTypesInfoType) GetFolioTypeOk() (*string, bool)`

GetFolioTypeOk returns a tuple with the FolioType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioType

`func (o *FolioTypesInfoType) SetFolioType(v string)`

SetFolioType sets FolioType field to given value.

### HasFolioType

`func (o *FolioTypesInfoType) HasFolioType() bool`

HasFolioType returns a boolean if a field has been set.

### GetSendFiscalFolio

`func (o *FolioTypesInfoType) GetSendFiscalFolio() bool`

GetSendFiscalFolio returns the SendFiscalFolio field if non-nil, zero value otherwise.

### GetSendFiscalFolioOk

`func (o *FolioTypesInfoType) GetSendFiscalFolioOk() (*bool, bool)`

GetSendFiscalFolioOk returns a tuple with the SendFiscalFolio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSendFiscalFolio

`func (o *FolioTypesInfoType) SetSendFiscalFolio(v bool)`

SetSendFiscalFolio sets SendFiscalFolio field to given value.

### HasSendFiscalFolio

`func (o *FolioTypesInfoType) HasSendFiscalFolio() bool`

HasSendFiscalFolio returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


