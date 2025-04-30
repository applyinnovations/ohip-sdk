# BusinessEventHeaderType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ModuleName** | Pointer to [**BusinessEventModuleType**](BusinessEventModuleType.md) |  | [optional] 
**ActionType** | Pointer to **string** | Business event action type, such as new reservation, update profile, etc. | [optional] 
**ActionId** | Pointer to **float32** | Unique action instance id of the business event, uniqueness is guaranteed intra-module only. | [optional] 
**PrimaryKey** | Pointer to **string** | Primary key value of the business event, such as resv name id, allotment header id, name id etc. | [optional] 
**ParentActionId** | Pointer to **float32** | Action instance id of the parent business event, if the action triggered this event was a side effect of another action. | [optional] 
**PublisherId** | Pointer to **float32** | Internal id of the application or system user that triggered this event. | [optional] 
**CreatedDateTime** | Pointer to **string** | Timestamp of the business event. | [optional] 
**HotelId** | Pointer to **string** | The property this business event is associated with. | [optional] 

## Methods

### NewBusinessEventHeaderType

`func NewBusinessEventHeaderType() *BusinessEventHeaderType`

NewBusinessEventHeaderType instantiates a new BusinessEventHeaderType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBusinessEventHeaderTypeWithDefaults

`func NewBusinessEventHeaderTypeWithDefaults() *BusinessEventHeaderType`

NewBusinessEventHeaderTypeWithDefaults instantiates a new BusinessEventHeaderType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetModuleName

`func (o *BusinessEventHeaderType) GetModuleName() BusinessEventModuleType`

GetModuleName returns the ModuleName field if non-nil, zero value otherwise.

### GetModuleNameOk

`func (o *BusinessEventHeaderType) GetModuleNameOk() (*BusinessEventModuleType, bool)`

GetModuleNameOk returns a tuple with the ModuleName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModuleName

`func (o *BusinessEventHeaderType) SetModuleName(v BusinessEventModuleType)`

SetModuleName sets ModuleName field to given value.

### HasModuleName

`func (o *BusinessEventHeaderType) HasModuleName() bool`

HasModuleName returns a boolean if a field has been set.

### GetActionType

`func (o *BusinessEventHeaderType) GetActionType() string`

GetActionType returns the ActionType field if non-nil, zero value otherwise.

### GetActionTypeOk

`func (o *BusinessEventHeaderType) GetActionTypeOk() (*string, bool)`

GetActionTypeOk returns a tuple with the ActionType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActionType

`func (o *BusinessEventHeaderType) SetActionType(v string)`

SetActionType sets ActionType field to given value.

### HasActionType

`func (o *BusinessEventHeaderType) HasActionType() bool`

HasActionType returns a boolean if a field has been set.

### GetActionId

`func (o *BusinessEventHeaderType) GetActionId() float32`

GetActionId returns the ActionId field if non-nil, zero value otherwise.

### GetActionIdOk

`func (o *BusinessEventHeaderType) GetActionIdOk() (*float32, bool)`

GetActionIdOk returns a tuple with the ActionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActionId

`func (o *BusinessEventHeaderType) SetActionId(v float32)`

SetActionId sets ActionId field to given value.

### HasActionId

`func (o *BusinessEventHeaderType) HasActionId() bool`

HasActionId returns a boolean if a field has been set.

### GetPrimaryKey

`func (o *BusinessEventHeaderType) GetPrimaryKey() string`

GetPrimaryKey returns the PrimaryKey field if non-nil, zero value otherwise.

### GetPrimaryKeyOk

`func (o *BusinessEventHeaderType) GetPrimaryKeyOk() (*string, bool)`

GetPrimaryKeyOk returns a tuple with the PrimaryKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimaryKey

`func (o *BusinessEventHeaderType) SetPrimaryKey(v string)`

SetPrimaryKey sets PrimaryKey field to given value.

### HasPrimaryKey

`func (o *BusinessEventHeaderType) HasPrimaryKey() bool`

HasPrimaryKey returns a boolean if a field has been set.

### GetParentActionId

`func (o *BusinessEventHeaderType) GetParentActionId() float32`

GetParentActionId returns the ParentActionId field if non-nil, zero value otherwise.

### GetParentActionIdOk

`func (o *BusinessEventHeaderType) GetParentActionIdOk() (*float32, bool)`

GetParentActionIdOk returns a tuple with the ParentActionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParentActionId

`func (o *BusinessEventHeaderType) SetParentActionId(v float32)`

SetParentActionId sets ParentActionId field to given value.

### HasParentActionId

`func (o *BusinessEventHeaderType) HasParentActionId() bool`

HasParentActionId returns a boolean if a field has been set.

### GetPublisherId

`func (o *BusinessEventHeaderType) GetPublisherId() float32`

GetPublisherId returns the PublisherId field if non-nil, zero value otherwise.

### GetPublisherIdOk

`func (o *BusinessEventHeaderType) GetPublisherIdOk() (*float32, bool)`

GetPublisherIdOk returns a tuple with the PublisherId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPublisherId

`func (o *BusinessEventHeaderType) SetPublisherId(v float32)`

SetPublisherId sets PublisherId field to given value.

### HasPublisherId

`func (o *BusinessEventHeaderType) HasPublisherId() bool`

HasPublisherId returns a boolean if a field has been set.

### GetCreatedDateTime

`func (o *BusinessEventHeaderType) GetCreatedDateTime() string`

GetCreatedDateTime returns the CreatedDateTime field if non-nil, zero value otherwise.

### GetCreatedDateTimeOk

`func (o *BusinessEventHeaderType) GetCreatedDateTimeOk() (*string, bool)`

GetCreatedDateTimeOk returns a tuple with the CreatedDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedDateTime

`func (o *BusinessEventHeaderType) SetCreatedDateTime(v string)`

SetCreatedDateTime sets CreatedDateTime field to given value.

### HasCreatedDateTime

`func (o *BusinessEventHeaderType) HasCreatedDateTime() bool`

HasCreatedDateTime returns a boolean if a field has been set.

### GetHotelId

`func (o *BusinessEventHeaderType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *BusinessEventHeaderType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *BusinessEventHeaderType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *BusinessEventHeaderType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


