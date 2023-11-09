# RateAnalysisDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Analysis** | Pointer to [**[]RateAnalysisType**](RateAnalysisType.md) | Rate availability analysis record for each date of the stay. | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewRateAnalysisDetails

`func NewRateAnalysisDetails() *RateAnalysisDetails`

NewRateAnalysisDetails instantiates a new RateAnalysisDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRateAnalysisDetailsWithDefaults

`func NewRateAnalysisDetailsWithDefaults() *RateAnalysisDetails`

NewRateAnalysisDetailsWithDefaults instantiates a new RateAnalysisDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAnalysis

`func (o *RateAnalysisDetails) GetAnalysis() []RateAnalysisType`

GetAnalysis returns the Analysis field if non-nil, zero value otherwise.

### GetAnalysisOk

`func (o *RateAnalysisDetails) GetAnalysisOk() (*[]RateAnalysisType, bool)`

GetAnalysisOk returns a tuple with the Analysis field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAnalysis

`func (o *RateAnalysisDetails) SetAnalysis(v []RateAnalysisType)`

SetAnalysis sets Analysis field to given value.

### HasAnalysis

`func (o *RateAnalysisDetails) HasAnalysis() bool`

HasAnalysis returns a boolean if a field has been set.

### GetLinks

`func (o *RateAnalysisDetails) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RateAnalysisDetails) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RateAnalysisDetails) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RateAnalysisDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *RateAnalysisDetails) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RateAnalysisDetails) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RateAnalysisDetails) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RateAnalysisDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


