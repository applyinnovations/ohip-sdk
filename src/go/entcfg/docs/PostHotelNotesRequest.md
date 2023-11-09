# PostHotelNotesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelNotes** | Pointer to [**HotelNotesType**](HotelNotesType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPostHotelNotesRequest

`func NewPostHotelNotesRequest() *PostHotelNotesRequest`

NewPostHotelNotesRequest instantiates a new PostHotelNotesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostHotelNotesRequestWithDefaults

`func NewPostHotelNotesRequestWithDefaults() *PostHotelNotesRequest`

NewPostHotelNotesRequestWithDefaults instantiates a new PostHotelNotesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelNotes

`func (o *PostHotelNotesRequest) GetHotelNotes() HotelNotesType`

GetHotelNotes returns the HotelNotes field if non-nil, zero value otherwise.

### GetHotelNotesOk

`func (o *PostHotelNotesRequest) GetHotelNotesOk() (*HotelNotesType, bool)`

GetHotelNotesOk returns a tuple with the HotelNotes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelNotes

`func (o *PostHotelNotesRequest) SetHotelNotes(v HotelNotesType)`

SetHotelNotes sets HotelNotes field to given value.

### HasHotelNotes

`func (o *PostHotelNotesRequest) HasHotelNotes() bool`

HasHotelNotes returns a boolean if a field has been set.

### GetLinks

`func (o *PostHotelNotesRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostHotelNotesRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostHotelNotesRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostHotelNotesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostHotelNotesRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostHotelNotesRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostHotelNotesRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostHotelNotesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


