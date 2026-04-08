# CheckDistributionReservationsSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CheckReservations** | Pointer to [**[]CheckDistributionReservationsSummaryType**](CheckDistributionReservationsSummaryType.md) | Collection of reservations Count and the status of its allowed actions, attached records. | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCheckDistributionReservationsSummary

`func NewCheckDistributionReservationsSummary() *CheckDistributionReservationsSummary`

NewCheckDistributionReservationsSummary instantiates a new CheckDistributionReservationsSummary object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCheckDistributionReservationsSummaryWithDefaults

`func NewCheckDistributionReservationsSummaryWithDefaults() *CheckDistributionReservationsSummary`

NewCheckDistributionReservationsSummaryWithDefaults instantiates a new CheckDistributionReservationsSummary object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCheckReservations

`func (o *CheckDistributionReservationsSummary) GetCheckReservations() []CheckDistributionReservationsSummaryType`

GetCheckReservations returns the CheckReservations field if non-nil, zero value otherwise.

### GetCheckReservationsOk

`func (o *CheckDistributionReservationsSummary) GetCheckReservationsOk() (*[]CheckDistributionReservationsSummaryType, bool)`

GetCheckReservationsOk returns a tuple with the CheckReservations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCheckReservations

`func (o *CheckDistributionReservationsSummary) SetCheckReservations(v []CheckDistributionReservationsSummaryType)`

SetCheckReservations sets CheckReservations field to given value.

### HasCheckReservations

`func (o *CheckDistributionReservationsSummary) HasCheckReservations() bool`

HasCheckReservations returns a boolean if a field has been set.

### GetHasMore

`func (o *CheckDistributionReservationsSummary) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *CheckDistributionReservationsSummary) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *CheckDistributionReservationsSummary) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *CheckDistributionReservationsSummary) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetTotalResults

`func (o *CheckDistributionReservationsSummary) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *CheckDistributionReservationsSummary) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *CheckDistributionReservationsSummary) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *CheckDistributionReservationsSummary) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.

### GetCount

`func (o *CheckDistributionReservationsSummary) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *CheckDistributionReservationsSummary) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *CheckDistributionReservationsSummary) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *CheckDistributionReservationsSummary) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetLinks

`func (o *CheckDistributionReservationsSummary) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CheckDistributionReservationsSummary) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CheckDistributionReservationsSummary) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CheckDistributionReservationsSummary) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CheckDistributionReservationsSummary) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CheckDistributionReservationsSummary) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CheckDistributionReservationsSummary) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CheckDistributionReservationsSummary) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


