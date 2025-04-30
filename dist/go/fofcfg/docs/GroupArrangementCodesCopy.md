# GroupArrangementCodesCopy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**GroupArrangementCode** | Pointer to [**[]CopyConfigurationCodeType**](CopyConfigurationCodeType.md) | List of the group arrangement codes to be copied. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewGroupArrangementCodesCopy

`func NewGroupArrangementCodesCopy() *GroupArrangementCodesCopy`

NewGroupArrangementCodesCopy instantiates a new GroupArrangementCodesCopy object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGroupArrangementCodesCopyWithDefaults

`func NewGroupArrangementCodesCopyWithDefaults() *GroupArrangementCodesCopy`

NewGroupArrangementCodesCopyWithDefaults instantiates a new GroupArrangementCodesCopy object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetGroupArrangementCode

`func (o *GroupArrangementCodesCopy) GetGroupArrangementCode() []CopyConfigurationCodeType`

GetGroupArrangementCode returns the GroupArrangementCode field if non-nil, zero value otherwise.

### GetGroupArrangementCodeOk

`func (o *GroupArrangementCodesCopy) GetGroupArrangementCodeOk() (*[]CopyConfigurationCodeType, bool)`

GetGroupArrangementCodeOk returns a tuple with the GroupArrangementCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroupArrangementCode

`func (o *GroupArrangementCodesCopy) SetGroupArrangementCode(v []CopyConfigurationCodeType)`

SetGroupArrangementCode sets GroupArrangementCode field to given value.

### HasGroupArrangementCode

`func (o *GroupArrangementCodesCopy) HasGroupArrangementCode() bool`

HasGroupArrangementCode returns a boolean if a field has been set.

### GetLinks

`func (o *GroupArrangementCodesCopy) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *GroupArrangementCodesCopy) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *GroupArrangementCodesCopy) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *GroupArrangementCodesCopy) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *GroupArrangementCodesCopy) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *GroupArrangementCodesCopy) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *GroupArrangementCodesCopy) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *GroupArrangementCodesCopy) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


