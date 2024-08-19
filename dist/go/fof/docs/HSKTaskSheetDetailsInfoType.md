# HSKTaskSheetDetailsInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Rooms** | Pointer to [**[]HSKTaskSheetDetailsInfoTypeRoomsInner**](HSKTaskSheetDetailsInfoTypeRoomsInner.md) | Details of the room which is part of the Task Sheet. The room details will be returned when the request for IncludeTaskSheetDetails(flag in the search type) is true. | [optional] 

## Methods

### NewHSKTaskSheetDetailsInfoType

`func NewHSKTaskSheetDetailsInfoType() *HSKTaskSheetDetailsInfoType`

NewHSKTaskSheetDetailsInfoType instantiates a new HSKTaskSheetDetailsInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHSKTaskSheetDetailsInfoTypeWithDefaults

`func NewHSKTaskSheetDetailsInfoTypeWithDefaults() *HSKTaskSheetDetailsInfoType`

NewHSKTaskSheetDetailsInfoTypeWithDefaults instantiates a new HSKTaskSheetDetailsInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRooms

`func (o *HSKTaskSheetDetailsInfoType) GetRooms() []HSKTaskSheetDetailsInfoTypeRoomsInner`

GetRooms returns the Rooms field if non-nil, zero value otherwise.

### GetRoomsOk

`func (o *HSKTaskSheetDetailsInfoType) GetRoomsOk() (*[]HSKTaskSheetDetailsInfoTypeRoomsInner, bool)`

GetRoomsOk returns a tuple with the Rooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRooms

`func (o *HSKTaskSheetDetailsInfoType) SetRooms(v []HSKTaskSheetDetailsInfoTypeRoomsInner)`

SetRooms sets Rooms field to given value.

### HasRooms

`func (o *HSKTaskSheetDetailsInfoType) HasRooms() bool`

HasRooms returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


