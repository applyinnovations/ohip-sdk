# RateSeasonsToBeChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RateSeasons** | Pointer to [**[]RateSeasonType**](RateSeasonType.md) | Hotel rate season details. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewRateSeasonsToBeChanged

`func NewRateSeasonsToBeChanged() *RateSeasonsToBeChanged`

NewRateSeasonsToBeChanged instantiates a new RateSeasonsToBeChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRateSeasonsToBeChangedWithDefaults

`func NewRateSeasonsToBeChangedWithDefaults() *RateSeasonsToBeChanged`

NewRateSeasonsToBeChangedWithDefaults instantiates a new RateSeasonsToBeChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRateSeasons

`func (o *RateSeasonsToBeChanged) GetRateSeasons() []RateSeasonType`

GetRateSeasons returns the RateSeasons field if non-nil, zero value otherwise.

### GetRateSeasonsOk

`func (o *RateSeasonsToBeChanged) GetRateSeasonsOk() (*[]RateSeasonType, bool)`

GetRateSeasonsOk returns a tuple with the RateSeasons field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateSeasons

`func (o *RateSeasonsToBeChanged) SetRateSeasons(v []RateSeasonType)`

SetRateSeasons sets RateSeasons field to given value.

### HasRateSeasons

`func (o *RateSeasonsToBeChanged) HasRateSeasons() bool`

HasRateSeasons returns a boolean if a field has been set.

### GetLinks

`func (o *RateSeasonsToBeChanged) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RateSeasonsToBeChanged) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RateSeasonsToBeChanged) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RateSeasonsToBeChanged) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *RateSeasonsToBeChanged) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RateSeasonsToBeChanged) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RateSeasonsToBeChanged) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RateSeasonsToBeChanged) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


