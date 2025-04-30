# SalesManagersInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SalesManagers** | Pointer to [**SalesManagersType**](SalesManagersType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewSalesManagersInfo

`func NewSalesManagersInfo() *SalesManagersInfo`

NewSalesManagersInfo instantiates a new SalesManagersInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSalesManagersInfoWithDefaults

`func NewSalesManagersInfoWithDefaults() *SalesManagersInfo`

NewSalesManagersInfoWithDefaults instantiates a new SalesManagersInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSalesManagers

`func (o *SalesManagersInfo) GetSalesManagers() SalesManagersType`

GetSalesManagers returns the SalesManagers field if non-nil, zero value otherwise.

### GetSalesManagersOk

`func (o *SalesManagersInfo) GetSalesManagersOk() (*SalesManagersType, bool)`

GetSalesManagersOk returns a tuple with the SalesManagers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSalesManagers

`func (o *SalesManagersInfo) SetSalesManagers(v SalesManagersType)`

SetSalesManagers sets SalesManagers field to given value.

### HasSalesManagers

`func (o *SalesManagersInfo) HasSalesManagers() bool`

HasSalesManagers returns a boolean if a field has been set.

### GetLinks

`func (o *SalesManagersInfo) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *SalesManagersInfo) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *SalesManagersInfo) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *SalesManagersInfo) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *SalesManagersInfo) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *SalesManagersInfo) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *SalesManagersInfo) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *SalesManagersInfo) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


