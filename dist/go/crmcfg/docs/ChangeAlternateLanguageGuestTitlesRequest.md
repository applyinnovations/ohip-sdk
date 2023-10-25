# ChangeAlternateLanguageGuestTitlesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AlternateLanguageGuestTitles** | Pointer to [**[]GuestTitleType**](GuestTitleType.md) | List of Guest Titles. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChangeAlternateLanguageGuestTitlesRequest

`func NewChangeAlternateLanguageGuestTitlesRequest() *ChangeAlternateLanguageGuestTitlesRequest`

NewChangeAlternateLanguageGuestTitlesRequest instantiates a new ChangeAlternateLanguageGuestTitlesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeAlternateLanguageGuestTitlesRequestWithDefaults

`func NewChangeAlternateLanguageGuestTitlesRequestWithDefaults() *ChangeAlternateLanguageGuestTitlesRequest`

NewChangeAlternateLanguageGuestTitlesRequestWithDefaults instantiates a new ChangeAlternateLanguageGuestTitlesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAlternateLanguageGuestTitles

`func (o *ChangeAlternateLanguageGuestTitlesRequest) GetAlternateLanguageGuestTitles() []GuestTitleType`

GetAlternateLanguageGuestTitles returns the AlternateLanguageGuestTitles field if non-nil, zero value otherwise.

### GetAlternateLanguageGuestTitlesOk

`func (o *ChangeAlternateLanguageGuestTitlesRequest) GetAlternateLanguageGuestTitlesOk() (*[]GuestTitleType, bool)`

GetAlternateLanguageGuestTitlesOk returns a tuple with the AlternateLanguageGuestTitles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlternateLanguageGuestTitles

`func (o *ChangeAlternateLanguageGuestTitlesRequest) SetAlternateLanguageGuestTitles(v []GuestTitleType)`

SetAlternateLanguageGuestTitles sets AlternateLanguageGuestTitles field to given value.

### HasAlternateLanguageGuestTitles

`func (o *ChangeAlternateLanguageGuestTitlesRequest) HasAlternateLanguageGuestTitles() bool`

HasAlternateLanguageGuestTitles returns a boolean if a field has been set.

### GetLinks

`func (o *ChangeAlternateLanguageGuestTitlesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangeAlternateLanguageGuestTitlesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangeAlternateLanguageGuestTitlesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangeAlternateLanguageGuestTitlesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeAlternateLanguageGuestTitlesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeAlternateLanguageGuestTitlesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeAlternateLanguageGuestTitlesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeAlternateLanguageGuestTitlesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


