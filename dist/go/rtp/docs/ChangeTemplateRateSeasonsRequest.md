# ChangeTemplateRateSeasonsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**TemplateRateSeasons** | Pointer to [**[]TemplateRateSeasonType**](TemplateRateSeasonType.md) | Hotel rate season details. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChangeTemplateRateSeasonsRequest

`func NewChangeTemplateRateSeasonsRequest() *ChangeTemplateRateSeasonsRequest`

NewChangeTemplateRateSeasonsRequest instantiates a new ChangeTemplateRateSeasonsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeTemplateRateSeasonsRequestWithDefaults

`func NewChangeTemplateRateSeasonsRequestWithDefaults() *ChangeTemplateRateSeasonsRequest`

NewChangeTemplateRateSeasonsRequestWithDefaults instantiates a new ChangeTemplateRateSeasonsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *ChangeTemplateRateSeasonsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangeTemplateRateSeasonsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangeTemplateRateSeasonsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangeTemplateRateSeasonsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTemplateRateSeasons

`func (o *ChangeTemplateRateSeasonsRequest) GetTemplateRateSeasons() []TemplateRateSeasonType`

GetTemplateRateSeasons returns the TemplateRateSeasons field if non-nil, zero value otherwise.

### GetTemplateRateSeasonsOk

`func (o *ChangeTemplateRateSeasonsRequest) GetTemplateRateSeasonsOk() (*[]TemplateRateSeasonType, bool)`

GetTemplateRateSeasonsOk returns a tuple with the TemplateRateSeasons field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplateRateSeasons

`func (o *ChangeTemplateRateSeasonsRequest) SetTemplateRateSeasons(v []TemplateRateSeasonType)`

SetTemplateRateSeasons sets TemplateRateSeasons field to given value.

### HasTemplateRateSeasons

`func (o *ChangeTemplateRateSeasonsRequest) HasTemplateRateSeasons() bool`

HasTemplateRateSeasons returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeTemplateRateSeasonsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeTemplateRateSeasonsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeTemplateRateSeasonsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeTemplateRateSeasonsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


