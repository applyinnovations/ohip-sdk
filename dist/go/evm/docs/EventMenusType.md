# EventMenusType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Critical** | Pointer to **bool** | Flag to indicate all event menus are critical. | [optional] 
**EventMenuInfo** | Pointer to [**[]EventMenuInfoType**](EventMenuInfoType.md) | Collection of Detailed information about event menus. | [optional] 
**IncludedInPackage** | Pointer to **bool** | Flag to indicate all event menus are part of a package. | [optional] 

## Methods

### NewEventMenusType

`func NewEventMenusType() *EventMenusType`

NewEventMenusType instantiates a new EventMenusType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEventMenusTypeWithDefaults

`func NewEventMenusTypeWithDefaults() *EventMenusType`

NewEventMenusTypeWithDefaults instantiates a new EventMenusType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCritical

`func (o *EventMenusType) GetCritical() bool`

GetCritical returns the Critical field if non-nil, zero value otherwise.

### GetCriticalOk

`func (o *EventMenusType) GetCriticalOk() (*bool, bool)`

GetCriticalOk returns a tuple with the Critical field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCritical

`func (o *EventMenusType) SetCritical(v bool)`

SetCritical sets Critical field to given value.

### HasCritical

`func (o *EventMenusType) HasCritical() bool`

HasCritical returns a boolean if a field has been set.

### GetEventMenuInfo

`func (o *EventMenusType) GetEventMenuInfo() []EventMenuInfoType`

GetEventMenuInfo returns the EventMenuInfo field if non-nil, zero value otherwise.

### GetEventMenuInfoOk

`func (o *EventMenusType) GetEventMenuInfoOk() (*[]EventMenuInfoType, bool)`

GetEventMenuInfoOk returns a tuple with the EventMenuInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventMenuInfo

`func (o *EventMenusType) SetEventMenuInfo(v []EventMenuInfoType)`

SetEventMenuInfo sets EventMenuInfo field to given value.

### HasEventMenuInfo

`func (o *EventMenusType) HasEventMenuInfo() bool`

HasEventMenuInfo returns a boolean if a field has been set.

### GetIncludedInPackage

`func (o *EventMenusType) GetIncludedInPackage() bool`

GetIncludedInPackage returns the IncludedInPackage field if non-nil, zero value otherwise.

### GetIncludedInPackageOk

`func (o *EventMenusType) GetIncludedInPackageOk() (*bool, bool)`

GetIncludedInPackageOk returns a tuple with the IncludedInPackage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludedInPackage

`func (o *EventMenusType) SetIncludedInPackage(v bool)`

SetIncludedInPackage sets IncludedInPackage field to given value.

### HasIncludedInPackage

`func (o *EventMenusType) HasIncludedInPackage() bool`

HasIncludedInPackage returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


