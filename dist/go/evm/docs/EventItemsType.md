# EventItemsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Critical** | Pointer to **bool** | Flag to indicate all inventory items are critical. | [optional] 
**EventItemInfo** | Pointer to [**[]EventItemInfoType**](EventItemInfoType.md) | Collection of Detailed information about event items. | [optional] 
**IncludedInPackage** | Pointer to **bool** | Flag to indicate all inventory items are part of a package. | [optional] 

## Methods

### NewEventItemsType

`func NewEventItemsType() *EventItemsType`

NewEventItemsType instantiates a new EventItemsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEventItemsTypeWithDefaults

`func NewEventItemsTypeWithDefaults() *EventItemsType`

NewEventItemsTypeWithDefaults instantiates a new EventItemsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCritical

`func (o *EventItemsType) GetCritical() bool`

GetCritical returns the Critical field if non-nil, zero value otherwise.

### GetCriticalOk

`func (o *EventItemsType) GetCriticalOk() (*bool, bool)`

GetCriticalOk returns a tuple with the Critical field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCritical

`func (o *EventItemsType) SetCritical(v bool)`

SetCritical sets Critical field to given value.

### HasCritical

`func (o *EventItemsType) HasCritical() bool`

HasCritical returns a boolean if a field has been set.

### GetEventItemInfo

`func (o *EventItemsType) GetEventItemInfo() []EventItemInfoType`

GetEventItemInfo returns the EventItemInfo field if non-nil, zero value otherwise.

### GetEventItemInfoOk

`func (o *EventItemsType) GetEventItemInfoOk() (*[]EventItemInfoType, bool)`

GetEventItemInfoOk returns a tuple with the EventItemInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventItemInfo

`func (o *EventItemsType) SetEventItemInfo(v []EventItemInfoType)`

SetEventItemInfo sets EventItemInfo field to given value.

### HasEventItemInfo

`func (o *EventItemsType) HasEventItemInfo() bool`

HasEventItemInfo returns a boolean if a field has been set.

### GetIncludedInPackage

`func (o *EventItemsType) GetIncludedInPackage() bool`

GetIncludedInPackage returns the IncludedInPackage field if non-nil, zero value otherwise.

### GetIncludedInPackageOk

`func (o *EventItemsType) GetIncludedInPackageOk() (*bool, bool)`

GetIncludedInPackageOk returns a tuple with the IncludedInPackage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludedInPackage

`func (o *EventItemsType) SetIncludedInPackage(v bool)`

SetIncludedInPackage sets IncludedInPackage field to given value.

### HasIncludedInPackage

`func (o *EventItemsType) HasIncludedInPackage() bool`

HasIncludedInPackage returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


