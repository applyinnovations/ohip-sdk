# OverlappingStay

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OverlappingStayInfo** | Pointer to [**[]OverlappingStayInfoType**](OverlappingStayInfoType.md) | Overlapping stay information of a reservation. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewOverlappingStay

`func NewOverlappingStay() *OverlappingStay`

NewOverlappingStay instantiates a new OverlappingStay object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOverlappingStayWithDefaults

`func NewOverlappingStayWithDefaults() *OverlappingStay`

NewOverlappingStayWithDefaults instantiates a new OverlappingStay object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOverlappingStayInfo

`func (o *OverlappingStay) GetOverlappingStayInfo() []OverlappingStayInfoType`

GetOverlappingStayInfo returns the OverlappingStayInfo field if non-nil, zero value otherwise.

### GetOverlappingStayInfoOk

`func (o *OverlappingStay) GetOverlappingStayInfoOk() (*[]OverlappingStayInfoType, bool)`

GetOverlappingStayInfoOk returns a tuple with the OverlappingStayInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverlappingStayInfo

`func (o *OverlappingStay) SetOverlappingStayInfo(v []OverlappingStayInfoType)`

SetOverlappingStayInfo sets OverlappingStayInfo field to given value.

### HasOverlappingStayInfo

`func (o *OverlappingStay) HasOverlappingStayInfo() bool`

HasOverlappingStayInfo returns a boolean if a field has been set.

### GetLinks

`func (o *OverlappingStay) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *OverlappingStay) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *OverlappingStay) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *OverlappingStay) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *OverlappingStay) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *OverlappingStay) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *OverlappingStay) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *OverlappingStay) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


