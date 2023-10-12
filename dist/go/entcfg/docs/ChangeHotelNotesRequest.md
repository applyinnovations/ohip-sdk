# ChangeHotelNotesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelNotes** | Pointer to [**[]CommentInfoType**](CommentInfoType.md) | List of Notes of the hotel. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChangeHotelNotesRequest

`func NewChangeHotelNotesRequest() *ChangeHotelNotesRequest`

NewChangeHotelNotesRequest instantiates a new ChangeHotelNotesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeHotelNotesRequestWithDefaults

`func NewChangeHotelNotesRequestWithDefaults() *ChangeHotelNotesRequest`

NewChangeHotelNotesRequestWithDefaults instantiates a new ChangeHotelNotesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelNotes

`func (o *ChangeHotelNotesRequest) GetHotelNotes() []CommentInfoType`

GetHotelNotes returns the HotelNotes field if non-nil, zero value otherwise.

### GetHotelNotesOk

`func (o *ChangeHotelNotesRequest) GetHotelNotesOk() (*[]CommentInfoType, bool)`

GetHotelNotesOk returns a tuple with the HotelNotes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelNotes

`func (o *ChangeHotelNotesRequest) SetHotelNotes(v []CommentInfoType)`

SetHotelNotes sets HotelNotes field to given value.

### HasHotelNotes

`func (o *ChangeHotelNotesRequest) HasHotelNotes() bool`

HasHotelNotes returns a boolean if a field has been set.

### GetLinks

`func (o *ChangeHotelNotesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangeHotelNotesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangeHotelNotesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangeHotelNotesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeHotelNotesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeHotelNotesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeHotelNotesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeHotelNotesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


