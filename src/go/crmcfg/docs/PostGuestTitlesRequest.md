# PostGuestTitlesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**GuestTitles** | Pointer to [**GuestTitlesType**](GuestTitlesType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPostGuestTitlesRequest

`func NewPostGuestTitlesRequest() *PostGuestTitlesRequest`

NewPostGuestTitlesRequest instantiates a new PostGuestTitlesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostGuestTitlesRequestWithDefaults

`func NewPostGuestTitlesRequestWithDefaults() *PostGuestTitlesRequest`

NewPostGuestTitlesRequestWithDefaults instantiates a new PostGuestTitlesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetGuestTitles

`func (o *PostGuestTitlesRequest) GetGuestTitles() GuestTitlesType`

GetGuestTitles returns the GuestTitles field if non-nil, zero value otherwise.

### GetGuestTitlesOk

`func (o *PostGuestTitlesRequest) GetGuestTitlesOk() (*GuestTitlesType, bool)`

GetGuestTitlesOk returns a tuple with the GuestTitles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestTitles

`func (o *PostGuestTitlesRequest) SetGuestTitles(v GuestTitlesType)`

SetGuestTitles sets GuestTitles field to given value.

### HasGuestTitles

`func (o *PostGuestTitlesRequest) HasGuestTitles() bool`

HasGuestTitles returns a boolean if a field has been set.

### GetLinks

`func (o *PostGuestTitlesRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostGuestTitlesRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostGuestTitlesRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostGuestTitlesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostGuestTitlesRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostGuestTitlesRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostGuestTitlesRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostGuestTitlesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


