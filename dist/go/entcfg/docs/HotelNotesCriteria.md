# HotelNotesCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelNotes** | Pointer to [**[]CommentInfoType**](CommentInfoType.md) | List of Notes of the hotel. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewHotelNotesCriteria

`func NewHotelNotesCriteria() *HotelNotesCriteria`

NewHotelNotesCriteria instantiates a new HotelNotesCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHotelNotesCriteriaWithDefaults

`func NewHotelNotesCriteriaWithDefaults() *HotelNotesCriteria`

NewHotelNotesCriteriaWithDefaults instantiates a new HotelNotesCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelNotes

`func (o *HotelNotesCriteria) GetHotelNotes() []CommentInfoType`

GetHotelNotes returns the HotelNotes field if non-nil, zero value otherwise.

### GetHotelNotesOk

`func (o *HotelNotesCriteria) GetHotelNotesOk() (*[]CommentInfoType, bool)`

GetHotelNotesOk returns a tuple with the HotelNotes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelNotes

`func (o *HotelNotesCriteria) SetHotelNotes(v []CommentInfoType)`

SetHotelNotes sets HotelNotes field to given value.

### HasHotelNotes

`func (o *HotelNotesCriteria) HasHotelNotes() bool`

HasHotelNotes returns a boolean if a field has been set.

### GetLinks

`func (o *HotelNotesCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *HotelNotesCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *HotelNotesCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *HotelNotesCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *HotelNotesCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *HotelNotesCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *HotelNotesCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *HotelNotesCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


