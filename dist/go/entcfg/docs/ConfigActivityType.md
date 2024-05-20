# ConfigActivityType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ActionType** | Pointer to **string** | Action Type: MDS_IMP, MDS_EXP, MDS_DEL, MDS_EXP_UNENC, MDS_IMP_UNENC. | [optional] 
**ActionDescription** | Pointer to **string** | action, layer, org name, user name and screen name or file name or path. | [optional] 
**HotelId** | Pointer to **string** | Code that uniquely identifies the hotel belonging to the organization. | [optional] 

## Methods

### NewConfigActivityType

`func NewConfigActivityType() *ConfigActivityType`

NewConfigActivityType instantiates a new ConfigActivityType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConfigActivityTypeWithDefaults

`func NewConfigActivityTypeWithDefaults() *ConfigActivityType`

NewConfigActivityTypeWithDefaults instantiates a new ConfigActivityType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActionType

`func (o *ConfigActivityType) GetActionType() string`

GetActionType returns the ActionType field if non-nil, zero value otherwise.

### GetActionTypeOk

`func (o *ConfigActivityType) GetActionTypeOk() (*string, bool)`

GetActionTypeOk returns a tuple with the ActionType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActionType

`func (o *ConfigActivityType) SetActionType(v string)`

SetActionType sets ActionType field to given value.

### HasActionType

`func (o *ConfigActivityType) HasActionType() bool`

HasActionType returns a boolean if a field has been set.

### GetActionDescription

`func (o *ConfigActivityType) GetActionDescription() string`

GetActionDescription returns the ActionDescription field if non-nil, zero value otherwise.

### GetActionDescriptionOk

`func (o *ConfigActivityType) GetActionDescriptionOk() (*string, bool)`

GetActionDescriptionOk returns a tuple with the ActionDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActionDescription

`func (o *ConfigActivityType) SetActionDescription(v string)`

SetActionDescription sets ActionDescription field to given value.

### HasActionDescription

`func (o *ConfigActivityType) HasActionDescription() bool`

HasActionDescription returns a boolean if a field has been set.

### GetHotelId

`func (o *ConfigActivityType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ConfigActivityType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ConfigActivityType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ConfigActivityType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


