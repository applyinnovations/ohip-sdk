# LinkedActivitiesType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Hotel Code of the Activity. | [optional] 
**ActivityId** | Pointer to [**ActivityId**](ActivityId.md) |  | [optional] 
**OwnerCodeList** | Pointer to **[]string** |  | [optional] 

## Methods

### NewLinkedActivitiesType

`func NewLinkedActivitiesType() *LinkedActivitiesType`

NewLinkedActivitiesType instantiates a new LinkedActivitiesType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLinkedActivitiesTypeWithDefaults

`func NewLinkedActivitiesTypeWithDefaults() *LinkedActivitiesType`

NewLinkedActivitiesTypeWithDefaults instantiates a new LinkedActivitiesType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *LinkedActivitiesType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *LinkedActivitiesType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *LinkedActivitiesType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *LinkedActivitiesType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetActivityId

`func (o *LinkedActivitiesType) GetActivityId() ActivityId`

GetActivityId returns the ActivityId field if non-nil, zero value otherwise.

### GetActivityIdOk

`func (o *LinkedActivitiesType) GetActivityIdOk() (*ActivityId, bool)`

GetActivityIdOk returns a tuple with the ActivityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivityId

`func (o *LinkedActivitiesType) SetActivityId(v ActivityId)`

SetActivityId sets ActivityId field to given value.

### HasActivityId

`func (o *LinkedActivitiesType) HasActivityId() bool`

HasActivityId returns a boolean if a field has been set.

### GetOwnerCodeList

`func (o *LinkedActivitiesType) GetOwnerCodeList() []string`

GetOwnerCodeList returns the OwnerCodeList field if non-nil, zero value otherwise.

### GetOwnerCodeListOk

`func (o *LinkedActivitiesType) GetOwnerCodeListOk() (*[]string, bool)`

GetOwnerCodeListOk returns a tuple with the OwnerCodeList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerCodeList

`func (o *LinkedActivitiesType) SetOwnerCodeList(v []string)`

SetOwnerCodeList sets OwnerCodeList field to given value.

### HasOwnerCodeList

`func (o *LinkedActivitiesType) HasOwnerCodeList() bool`

HasOwnerCodeList returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


