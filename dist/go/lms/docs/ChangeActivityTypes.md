# ChangeActivityTypes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ActivityTypes** | Pointer to [**[]ActivityTypeDetailType**](ActivityTypeDetailType.md) | Collection of Activity Types. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChangeActivityTypes

`func NewChangeActivityTypes() *ChangeActivityTypes`

NewChangeActivityTypes instantiates a new ChangeActivityTypes object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeActivityTypesWithDefaults

`func NewChangeActivityTypesWithDefaults() *ChangeActivityTypes`

NewChangeActivityTypesWithDefaults instantiates a new ChangeActivityTypes object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActivityTypes

`func (o *ChangeActivityTypes) GetActivityTypes() []ActivityTypeDetailType`

GetActivityTypes returns the ActivityTypes field if non-nil, zero value otherwise.

### GetActivityTypesOk

`func (o *ChangeActivityTypes) GetActivityTypesOk() (*[]ActivityTypeDetailType, bool)`

GetActivityTypesOk returns a tuple with the ActivityTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivityTypes

`func (o *ChangeActivityTypes) SetActivityTypes(v []ActivityTypeDetailType)`

SetActivityTypes sets ActivityTypes field to given value.

### HasActivityTypes

`func (o *ChangeActivityTypes) HasActivityTypes() bool`

HasActivityTypes returns a boolean if a field has been set.

### GetLinks

`func (o *ChangeActivityTypes) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangeActivityTypes) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangeActivityTypes) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangeActivityTypes) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeActivityTypes) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeActivityTypes) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeActivityTypes) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeActivityTypes) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


