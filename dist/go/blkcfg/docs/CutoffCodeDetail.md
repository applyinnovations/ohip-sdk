# CutoffCodeDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **int32** | Cutoff Schedule detail Id. | [optional] 
**StayDate** | Pointer to **string** | Contains stay date. | [optional] 
**CutoffDays** | Pointer to **int32** | Contains the number of cutoff Days to be set for specific date and room type. | [optional] 
**RoomType** | Pointer to **string** | Contains the room types. | [optional] 

## Methods

### NewCutoffCodeDetail

`func NewCutoffCodeDetail() *CutoffCodeDetail`

NewCutoffCodeDetail instantiates a new CutoffCodeDetail object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCutoffCodeDetailWithDefaults

`func NewCutoffCodeDetailWithDefaults() *CutoffCodeDetail`

NewCutoffCodeDetailWithDefaults instantiates a new CutoffCodeDetail object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *CutoffCodeDetail) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CutoffCodeDetail) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CutoffCodeDetail) SetId(v int32)`

SetId sets Id field to given value.

### HasId

`func (o *CutoffCodeDetail) HasId() bool`

HasId returns a boolean if a field has been set.

### GetStayDate

`func (o *CutoffCodeDetail) GetStayDate() string`

GetStayDate returns the StayDate field if non-nil, zero value otherwise.

### GetStayDateOk

`func (o *CutoffCodeDetail) GetStayDateOk() (*string, bool)`

GetStayDateOk returns a tuple with the StayDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStayDate

`func (o *CutoffCodeDetail) SetStayDate(v string)`

SetStayDate sets StayDate field to given value.

### HasStayDate

`func (o *CutoffCodeDetail) HasStayDate() bool`

HasStayDate returns a boolean if a field has been set.

### GetCutoffDays

`func (o *CutoffCodeDetail) GetCutoffDays() int32`

GetCutoffDays returns the CutoffDays field if non-nil, zero value otherwise.

### GetCutoffDaysOk

`func (o *CutoffCodeDetail) GetCutoffDaysOk() (*int32, bool)`

GetCutoffDaysOk returns a tuple with the CutoffDays field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCutoffDays

`func (o *CutoffCodeDetail) SetCutoffDays(v int32)`

SetCutoffDays sets CutoffDays field to given value.

### HasCutoffDays

`func (o *CutoffCodeDetail) HasCutoffDays() bool`

HasCutoffDays returns a boolean if a field has been set.

### GetRoomType

`func (o *CutoffCodeDetail) GetRoomType() string`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *CutoffCodeDetail) GetRoomTypeOk() (*string, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *CutoffCodeDetail) SetRoomType(v string)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *CutoffCodeDetail) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


