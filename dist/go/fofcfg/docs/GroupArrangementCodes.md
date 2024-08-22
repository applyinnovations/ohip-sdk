# GroupArrangementCodes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**GroupArrangementCodes** | Pointer to [**[]GroupArrangementCodeType**](GroupArrangementCodeType.md) | Details for group arrangement code along with associated transaction codes. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewGroupArrangementCodes

`func NewGroupArrangementCodes() *GroupArrangementCodes`

NewGroupArrangementCodes instantiates a new GroupArrangementCodes object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGroupArrangementCodesWithDefaults

`func NewGroupArrangementCodesWithDefaults() *GroupArrangementCodes`

NewGroupArrangementCodesWithDefaults instantiates a new GroupArrangementCodes object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetGroupArrangementCodes

`func (o *GroupArrangementCodes) GetGroupArrangementCodes() []GroupArrangementCodeType`

GetGroupArrangementCodes returns the GroupArrangementCodes field if non-nil, zero value otherwise.

### GetGroupArrangementCodesOk

`func (o *GroupArrangementCodes) GetGroupArrangementCodesOk() (*[]GroupArrangementCodeType, bool)`

GetGroupArrangementCodesOk returns a tuple with the GroupArrangementCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroupArrangementCodes

`func (o *GroupArrangementCodes) SetGroupArrangementCodes(v []GroupArrangementCodeType)`

SetGroupArrangementCodes sets GroupArrangementCodes field to given value.

### HasGroupArrangementCodes

`func (o *GroupArrangementCodes) HasGroupArrangementCodes() bool`

HasGroupArrangementCodes returns a boolean if a field has been set.

### GetLinks

`func (o *GroupArrangementCodes) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *GroupArrangementCodes) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *GroupArrangementCodes) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *GroupArrangementCodes) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *GroupArrangementCodes) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *GroupArrangementCodes) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *GroupArrangementCodes) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *GroupArrangementCodes) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


