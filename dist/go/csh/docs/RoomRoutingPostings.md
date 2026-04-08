# RoomRoutingPostings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PostingsForRoomRouting** | Pointer to [**PostingsInfoType**](PostingsInfoType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewRoomRoutingPostings

`func NewRoomRoutingPostings() *RoomRoutingPostings`

NewRoomRoutingPostings instantiates a new RoomRoutingPostings object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomRoutingPostingsWithDefaults

`func NewRoomRoutingPostingsWithDefaults() *RoomRoutingPostings`

NewRoomRoutingPostingsWithDefaults instantiates a new RoomRoutingPostings object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPostingsForRoomRouting

`func (o *RoomRoutingPostings) GetPostingsForRoomRouting() PostingsInfoType`

GetPostingsForRoomRouting returns the PostingsForRoomRouting field if non-nil, zero value otherwise.

### GetPostingsForRoomRoutingOk

`func (o *RoomRoutingPostings) GetPostingsForRoomRoutingOk() (*PostingsInfoType, bool)`

GetPostingsForRoomRoutingOk returns a tuple with the PostingsForRoomRouting field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostingsForRoomRouting

`func (o *RoomRoutingPostings) SetPostingsForRoomRouting(v PostingsInfoType)`

SetPostingsForRoomRouting sets PostingsForRoomRouting field to given value.

### HasPostingsForRoomRouting

`func (o *RoomRoutingPostings) HasPostingsForRoomRouting() bool`

HasPostingsForRoomRouting returns a boolean if a field has been set.

### GetWarnings

`func (o *RoomRoutingPostings) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RoomRoutingPostings) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RoomRoutingPostings) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RoomRoutingPostings) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


