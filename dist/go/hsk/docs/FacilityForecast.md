# FacilityForecast

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FacilityForecastDetails** | Pointer to [**FacilityForecastFacilityForecastDetails**](FacilityForecastFacilityForecastDetails.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewFacilityForecast

`func NewFacilityForecast() *FacilityForecast`

NewFacilityForecast instantiates a new FacilityForecast object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFacilityForecastWithDefaults

`func NewFacilityForecastWithDefaults() *FacilityForecast`

NewFacilityForecastWithDefaults instantiates a new FacilityForecast object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFacilityForecastDetails

`func (o *FacilityForecast) GetFacilityForecastDetails() FacilityForecastFacilityForecastDetails`

GetFacilityForecastDetails returns the FacilityForecastDetails field if non-nil, zero value otherwise.

### GetFacilityForecastDetailsOk

`func (o *FacilityForecast) GetFacilityForecastDetailsOk() (*FacilityForecastFacilityForecastDetails, bool)`

GetFacilityForecastDetailsOk returns a tuple with the FacilityForecastDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFacilityForecastDetails

`func (o *FacilityForecast) SetFacilityForecastDetails(v FacilityForecastFacilityForecastDetails)`

SetFacilityForecastDetails sets FacilityForecastDetails field to given value.

### HasFacilityForecastDetails

`func (o *FacilityForecast) HasFacilityForecastDetails() bool`

HasFacilityForecastDetails returns a boolean if a field has been set.

### GetLinks

`func (o *FacilityForecast) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *FacilityForecast) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *FacilityForecast) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *FacilityForecast) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *FacilityForecast) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *FacilityForecast) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *FacilityForecast) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *FacilityForecast) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


