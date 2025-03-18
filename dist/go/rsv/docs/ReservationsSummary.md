# ReservationsSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReservationsSummaryInformation** | Pointer to [**ReservationsSummaryInformationType**](ReservationsSummaryInformationType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewReservationsSummary

`func NewReservationsSummary() *ReservationsSummary`

NewReservationsSummary instantiates a new ReservationsSummary object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationsSummaryWithDefaults

`func NewReservationsSummaryWithDefaults() *ReservationsSummary`

NewReservationsSummaryWithDefaults instantiates a new ReservationsSummary object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReservationsSummaryInformation

`func (o *ReservationsSummary) GetReservationsSummaryInformation() ReservationsSummaryInformationType`

GetReservationsSummaryInformation returns the ReservationsSummaryInformation field if non-nil, zero value otherwise.

### GetReservationsSummaryInformationOk

`func (o *ReservationsSummary) GetReservationsSummaryInformationOk() (*ReservationsSummaryInformationType, bool)`

GetReservationsSummaryInformationOk returns a tuple with the ReservationsSummaryInformation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationsSummaryInformation

`func (o *ReservationsSummary) SetReservationsSummaryInformation(v ReservationsSummaryInformationType)`

SetReservationsSummaryInformation sets ReservationsSummaryInformation field to given value.

### HasReservationsSummaryInformation

`func (o *ReservationsSummary) HasReservationsSummaryInformation() bool`

HasReservationsSummaryInformation returns a boolean if a field has been set.

### GetLinks

`func (o *ReservationsSummary) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ReservationsSummary) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ReservationsSummary) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ReservationsSummary) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ReservationsSummary) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ReservationsSummary) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ReservationsSummary) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ReservationsSummary) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


