# FlexFieldValues

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FlexFieldInfo** | Pointer to [**FlexFieldValueType**](FlexFieldValueType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewFlexFieldValues

`func NewFlexFieldValues() *FlexFieldValues`

NewFlexFieldValues instantiates a new FlexFieldValues object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFlexFieldValuesWithDefaults

`func NewFlexFieldValuesWithDefaults() *FlexFieldValues`

NewFlexFieldValuesWithDefaults instantiates a new FlexFieldValues object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFlexFieldInfo

`func (o *FlexFieldValues) GetFlexFieldInfo() FlexFieldValueType`

GetFlexFieldInfo returns the FlexFieldInfo field if non-nil, zero value otherwise.

### GetFlexFieldInfoOk

`func (o *FlexFieldValues) GetFlexFieldInfoOk() (*FlexFieldValueType, bool)`

GetFlexFieldInfoOk returns a tuple with the FlexFieldInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFlexFieldInfo

`func (o *FlexFieldValues) SetFlexFieldInfo(v FlexFieldValueType)`

SetFlexFieldInfo sets FlexFieldInfo field to given value.

### HasFlexFieldInfo

`func (o *FlexFieldValues) HasFlexFieldInfo() bool`

HasFlexFieldInfo returns a boolean if a field has been set.

### GetLinks

`func (o *FlexFieldValues) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *FlexFieldValues) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *FlexFieldValues) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *FlexFieldValues) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *FlexFieldValues) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *FlexFieldValues) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *FlexFieldValues) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *FlexFieldValues) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


