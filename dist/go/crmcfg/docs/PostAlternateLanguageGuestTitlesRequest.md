# PostAlternateLanguageGuestTitlesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AlternateLanguageGuestTitles** | Pointer to [**[]GuestTitleType**](GuestTitleType.md) | List of Guest Titles. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostAlternateLanguageGuestTitlesRequest

`func NewPostAlternateLanguageGuestTitlesRequest() *PostAlternateLanguageGuestTitlesRequest`

NewPostAlternateLanguageGuestTitlesRequest instantiates a new PostAlternateLanguageGuestTitlesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostAlternateLanguageGuestTitlesRequestWithDefaults

`func NewPostAlternateLanguageGuestTitlesRequestWithDefaults() *PostAlternateLanguageGuestTitlesRequest`

NewPostAlternateLanguageGuestTitlesRequestWithDefaults instantiates a new PostAlternateLanguageGuestTitlesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAlternateLanguageGuestTitles

`func (o *PostAlternateLanguageGuestTitlesRequest) GetAlternateLanguageGuestTitles() []GuestTitleType`

GetAlternateLanguageGuestTitles returns the AlternateLanguageGuestTitles field if non-nil, zero value otherwise.

### GetAlternateLanguageGuestTitlesOk

`func (o *PostAlternateLanguageGuestTitlesRequest) GetAlternateLanguageGuestTitlesOk() (*[]GuestTitleType, bool)`

GetAlternateLanguageGuestTitlesOk returns a tuple with the AlternateLanguageGuestTitles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlternateLanguageGuestTitles

`func (o *PostAlternateLanguageGuestTitlesRequest) SetAlternateLanguageGuestTitles(v []GuestTitleType)`

SetAlternateLanguageGuestTitles sets AlternateLanguageGuestTitles field to given value.

### HasAlternateLanguageGuestTitles

`func (o *PostAlternateLanguageGuestTitlesRequest) HasAlternateLanguageGuestTitles() bool`

HasAlternateLanguageGuestTitles returns a boolean if a field has been set.

### GetLinks

`func (o *PostAlternateLanguageGuestTitlesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostAlternateLanguageGuestTitlesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostAlternateLanguageGuestTitlesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostAlternateLanguageGuestTitlesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostAlternateLanguageGuestTitlesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostAlternateLanguageGuestTitlesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostAlternateLanguageGuestTitlesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostAlternateLanguageGuestTitlesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


