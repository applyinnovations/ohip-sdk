# CopyFiscalFolioParametersType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SourceHotelCode** | Pointer to **string** | Source hotel code from where Fiscal Folio Parameter(s) have to be copied. | [optional] 
**CopyFiscalFolioParametersInfo** | Pointer to [**[]CopyFiscalFolioParametersInfoType**](CopyFiscalFolioParametersInfoType.md) | Provides information about the target hotel code where the source Fiscal Folio Parameter will be copied to, what the Fiscal Folio Parameter will be named under the target hotel code and the description of the Fiscal Folio Parameter under the target hotel code. | [optional] 

## Methods

### NewCopyFiscalFolioParametersType

`func NewCopyFiscalFolioParametersType() *CopyFiscalFolioParametersType`

NewCopyFiscalFolioParametersType instantiates a new CopyFiscalFolioParametersType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCopyFiscalFolioParametersTypeWithDefaults

`func NewCopyFiscalFolioParametersTypeWithDefaults() *CopyFiscalFolioParametersType`

NewCopyFiscalFolioParametersTypeWithDefaults instantiates a new CopyFiscalFolioParametersType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSourceHotelCode

`func (o *CopyFiscalFolioParametersType) GetSourceHotelCode() string`

GetSourceHotelCode returns the SourceHotelCode field if non-nil, zero value otherwise.

### GetSourceHotelCodeOk

`func (o *CopyFiscalFolioParametersType) GetSourceHotelCodeOk() (*string, bool)`

GetSourceHotelCodeOk returns a tuple with the SourceHotelCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceHotelCode

`func (o *CopyFiscalFolioParametersType) SetSourceHotelCode(v string)`

SetSourceHotelCode sets SourceHotelCode field to given value.

### HasSourceHotelCode

`func (o *CopyFiscalFolioParametersType) HasSourceHotelCode() bool`

HasSourceHotelCode returns a boolean if a field has been set.

### GetCopyFiscalFolioParametersInfo

`func (o *CopyFiscalFolioParametersType) GetCopyFiscalFolioParametersInfo() []CopyFiscalFolioParametersInfoType`

GetCopyFiscalFolioParametersInfo returns the CopyFiscalFolioParametersInfo field if non-nil, zero value otherwise.

### GetCopyFiscalFolioParametersInfoOk

`func (o *CopyFiscalFolioParametersType) GetCopyFiscalFolioParametersInfoOk() (*[]CopyFiscalFolioParametersInfoType, bool)`

GetCopyFiscalFolioParametersInfoOk returns a tuple with the CopyFiscalFolioParametersInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCopyFiscalFolioParametersInfo

`func (o *CopyFiscalFolioParametersType) SetCopyFiscalFolioParametersInfo(v []CopyFiscalFolioParametersInfoType)`

SetCopyFiscalFolioParametersInfo sets CopyFiscalFolioParametersInfo field to given value.

### HasCopyFiscalFolioParametersInfo

`func (o *CopyFiscalFolioParametersType) HasCopyFiscalFolioParametersInfo() bool`

HasCopyFiscalFolioParametersInfo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


