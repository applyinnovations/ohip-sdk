# PostRateSeasonsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**RateSeasons** | Pointer to [**[]RateSeasonType**](RateSeasonType.md) | Hotel rate season details. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostRateSeasonsRequest

`func NewPostRateSeasonsRequest() *PostRateSeasonsRequest`

NewPostRateSeasonsRequest instantiates a new PostRateSeasonsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostRateSeasonsRequestWithDefaults

`func NewPostRateSeasonsRequestWithDefaults() *PostRateSeasonsRequest`

NewPostRateSeasonsRequestWithDefaults instantiates a new PostRateSeasonsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PostRateSeasonsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostRateSeasonsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostRateSeasonsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostRateSeasonsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRateSeasons

`func (o *PostRateSeasonsRequest) GetRateSeasons() []RateSeasonType`

GetRateSeasons returns the RateSeasons field if non-nil, zero value otherwise.

### GetRateSeasonsOk

`func (o *PostRateSeasonsRequest) GetRateSeasonsOk() (*[]RateSeasonType, bool)`

GetRateSeasonsOk returns a tuple with the RateSeasons field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateSeasons

`func (o *PostRateSeasonsRequest) SetRateSeasons(v []RateSeasonType)`

SetRateSeasons sets RateSeasons field to given value.

### HasRateSeasons

`func (o *PostRateSeasonsRequest) HasRateSeasons() bool`

HasRateSeasons returns a boolean if a field has been set.

### GetWarnings

`func (o *PostRateSeasonsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostRateSeasonsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostRateSeasonsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostRateSeasonsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


