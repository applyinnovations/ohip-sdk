# FiscalCommandsResponseInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FiscalResponseInfo** | Pointer to [**FiscalResponseInfoType**](FiscalResponseInfoType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewFiscalCommandsResponseInfo

`func NewFiscalCommandsResponseInfo() *FiscalCommandsResponseInfo`

NewFiscalCommandsResponseInfo instantiates a new FiscalCommandsResponseInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFiscalCommandsResponseInfoWithDefaults

`func NewFiscalCommandsResponseInfoWithDefaults() *FiscalCommandsResponseInfo`

NewFiscalCommandsResponseInfoWithDefaults instantiates a new FiscalCommandsResponseInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFiscalResponseInfo

`func (o *FiscalCommandsResponseInfo) GetFiscalResponseInfo() FiscalResponseInfoType`

GetFiscalResponseInfo returns the FiscalResponseInfo field if non-nil, zero value otherwise.

### GetFiscalResponseInfoOk

`func (o *FiscalCommandsResponseInfo) GetFiscalResponseInfoOk() (*FiscalResponseInfoType, bool)`

GetFiscalResponseInfoOk returns a tuple with the FiscalResponseInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiscalResponseInfo

`func (o *FiscalCommandsResponseInfo) SetFiscalResponseInfo(v FiscalResponseInfoType)`

SetFiscalResponseInfo sets FiscalResponseInfo field to given value.

### HasFiscalResponseInfo

`func (o *FiscalCommandsResponseInfo) HasFiscalResponseInfo() bool`

HasFiscalResponseInfo returns a boolean if a field has been set.

### GetLinks

`func (o *FiscalCommandsResponseInfo) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *FiscalCommandsResponseInfo) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *FiscalCommandsResponseInfo) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *FiscalCommandsResponseInfo) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *FiscalCommandsResponseInfo) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *FiscalCommandsResponseInfo) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *FiscalCommandsResponseInfo) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *FiscalCommandsResponseInfo) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


