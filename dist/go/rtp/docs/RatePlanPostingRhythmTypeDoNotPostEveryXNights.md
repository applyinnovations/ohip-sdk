# RatePlanPostingRhythmTypeDoNotPostEveryXNights

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**XNight** | Pointer to **int32** | The night the rate plan is not supposed to be posted. | [optional] 
**PostPackages** | Pointer to **bool** | Post the packages on free nights if the packages posting rhythm falls on the night rate plan is not getting posted. | [optional] 

## Methods

### NewRatePlanPostingRhythmTypeDoNotPostEveryXNights

`func NewRatePlanPostingRhythmTypeDoNotPostEveryXNights() *RatePlanPostingRhythmTypeDoNotPostEveryXNights`

NewRatePlanPostingRhythmTypeDoNotPostEveryXNights instantiates a new RatePlanPostingRhythmTypeDoNotPostEveryXNights object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRatePlanPostingRhythmTypeDoNotPostEveryXNightsWithDefaults

`func NewRatePlanPostingRhythmTypeDoNotPostEveryXNightsWithDefaults() *RatePlanPostingRhythmTypeDoNotPostEveryXNights`

NewRatePlanPostingRhythmTypeDoNotPostEveryXNightsWithDefaults instantiates a new RatePlanPostingRhythmTypeDoNotPostEveryXNights object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetXNight

`func (o *RatePlanPostingRhythmTypeDoNotPostEveryXNights) GetXNight() int32`

GetXNight returns the XNight field if non-nil, zero value otherwise.

### GetXNightOk

`func (o *RatePlanPostingRhythmTypeDoNotPostEveryXNights) GetXNightOk() (*int32, bool)`

GetXNightOk returns a tuple with the XNight field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetXNight

`func (o *RatePlanPostingRhythmTypeDoNotPostEveryXNights) SetXNight(v int32)`

SetXNight sets XNight field to given value.

### HasXNight

`func (o *RatePlanPostingRhythmTypeDoNotPostEveryXNights) HasXNight() bool`

HasXNight returns a boolean if a field has been set.

### GetPostPackages

`func (o *RatePlanPostingRhythmTypeDoNotPostEveryXNights) GetPostPackages() bool`

GetPostPackages returns the PostPackages field if non-nil, zero value otherwise.

### GetPostPackagesOk

`func (o *RatePlanPostingRhythmTypeDoNotPostEveryXNights) GetPostPackagesOk() (*bool, bool)`

GetPostPackagesOk returns a tuple with the PostPackages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostPackages

`func (o *RatePlanPostingRhythmTypeDoNotPostEveryXNights) SetPostPackages(v bool)`

SetPostPackages sets PostPackages field to given value.

### HasPostPackages

`func (o *RatePlanPostingRhythmTypeDoNotPostEveryXNights) HasPostPackages() bool`

HasPostPackages returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


