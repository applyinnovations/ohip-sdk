# CreateActivityTypes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ActivityTypes** | Pointer to [**[]ActivityTypeDetailType**](ActivityTypeDetailType.md) | Collection of Activity Types. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCreateActivityTypes

`func NewCreateActivityTypes() *CreateActivityTypes`

NewCreateActivityTypes instantiates a new CreateActivityTypes object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateActivityTypesWithDefaults

`func NewCreateActivityTypesWithDefaults() *CreateActivityTypes`

NewCreateActivityTypesWithDefaults instantiates a new CreateActivityTypes object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActivityTypes

`func (o *CreateActivityTypes) GetActivityTypes() []ActivityTypeDetailType`

GetActivityTypes returns the ActivityTypes field if non-nil, zero value otherwise.

### GetActivityTypesOk

`func (o *CreateActivityTypes) GetActivityTypesOk() (*[]ActivityTypeDetailType, bool)`

GetActivityTypesOk returns a tuple with the ActivityTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivityTypes

`func (o *CreateActivityTypes) SetActivityTypes(v []ActivityTypeDetailType)`

SetActivityTypes sets ActivityTypes field to given value.

### HasActivityTypes

`func (o *CreateActivityTypes) HasActivityTypes() bool`

HasActivityTypes returns a boolean if a field has been set.

### GetLinks

`func (o *CreateActivityTypes) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CreateActivityTypes) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CreateActivityTypes) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CreateActivityTypes) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CreateActivityTypes) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CreateActivityTypes) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CreateActivityTypes) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CreateActivityTypes) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

