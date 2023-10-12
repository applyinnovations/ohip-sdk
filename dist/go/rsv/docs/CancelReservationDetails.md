# CancelReservationDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CxlActivityLog** | Pointer to [**[]CancellationActivityType**](CancellationActivityType.md) | Cancellation information includes information regarding Reason, Date of Cancellation etc.. | [optional] 
**OldRates** | Pointer to [**[]DailyRateType**](DailyRateType.md) | Defines room rate information on a daily basis. | [optional] 
**NewRates** | Pointer to [**[]DailyRateType**](DailyRateType.md) | Defines room rate information on a daily basis. | [optional] 
**Reservations** | Pointer to [**[]CancelReservationType**](CancelReservationType.md) | Information regarding the reservation which was canceled. | [optional] 
**ChannelInformation** | Pointer to [**ChannelResvRSInfoType**](ChannelResvRSInfoType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCancelReservationDetails

`func NewCancelReservationDetails() *CancelReservationDetails`

NewCancelReservationDetails instantiates a new CancelReservationDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCancelReservationDetailsWithDefaults

`func NewCancelReservationDetailsWithDefaults() *CancelReservationDetails`

NewCancelReservationDetailsWithDefaults instantiates a new CancelReservationDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCxlActivityLog

`func (o *CancelReservationDetails) GetCxlActivityLog() []CancellationActivityType`

GetCxlActivityLog returns the CxlActivityLog field if non-nil, zero value otherwise.

### GetCxlActivityLogOk

`func (o *CancelReservationDetails) GetCxlActivityLogOk() (*[]CancellationActivityType, bool)`

GetCxlActivityLogOk returns a tuple with the CxlActivityLog field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCxlActivityLog

`func (o *CancelReservationDetails) SetCxlActivityLog(v []CancellationActivityType)`

SetCxlActivityLog sets CxlActivityLog field to given value.

### HasCxlActivityLog

`func (o *CancelReservationDetails) HasCxlActivityLog() bool`

HasCxlActivityLog returns a boolean if a field has been set.

### GetOldRates

`func (o *CancelReservationDetails) GetOldRates() []DailyRateType`

GetOldRates returns the OldRates field if non-nil, zero value otherwise.

### GetOldRatesOk

`func (o *CancelReservationDetails) GetOldRatesOk() (*[]DailyRateType, bool)`

GetOldRatesOk returns a tuple with the OldRates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOldRates

`func (o *CancelReservationDetails) SetOldRates(v []DailyRateType)`

SetOldRates sets OldRates field to given value.

### HasOldRates

`func (o *CancelReservationDetails) HasOldRates() bool`

HasOldRates returns a boolean if a field has been set.

### GetNewRates

`func (o *CancelReservationDetails) GetNewRates() []DailyRateType`

GetNewRates returns the NewRates field if non-nil, zero value otherwise.

### GetNewRatesOk

`func (o *CancelReservationDetails) GetNewRatesOk() (*[]DailyRateType, bool)`

GetNewRatesOk returns a tuple with the NewRates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewRates

`func (o *CancelReservationDetails) SetNewRates(v []DailyRateType)`

SetNewRates sets NewRates field to given value.

### HasNewRates

`func (o *CancelReservationDetails) HasNewRates() bool`

HasNewRates returns a boolean if a field has been set.

### GetReservations

`func (o *CancelReservationDetails) GetReservations() []CancelReservationType`

GetReservations returns the Reservations field if non-nil, zero value otherwise.

### GetReservationsOk

`func (o *CancelReservationDetails) GetReservationsOk() (*[]CancelReservationType, bool)`

GetReservationsOk returns a tuple with the Reservations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservations

`func (o *CancelReservationDetails) SetReservations(v []CancelReservationType)`

SetReservations sets Reservations field to given value.

### HasReservations

`func (o *CancelReservationDetails) HasReservations() bool`

HasReservations returns a boolean if a field has been set.

### GetChannelInformation

`func (o *CancelReservationDetails) GetChannelInformation() ChannelResvRSInfoType`

GetChannelInformation returns the ChannelInformation field if non-nil, zero value otherwise.

### GetChannelInformationOk

`func (o *CancelReservationDetails) GetChannelInformationOk() (*ChannelResvRSInfoType, bool)`

GetChannelInformationOk returns a tuple with the ChannelInformation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelInformation

`func (o *CancelReservationDetails) SetChannelInformation(v ChannelResvRSInfoType)`

SetChannelInformation sets ChannelInformation field to given value.

### HasChannelInformation

`func (o *CancelReservationDetails) HasChannelInformation() bool`

HasChannelInformation returns a boolean if a field has been set.

### GetLinks

`func (o *CancelReservationDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CancelReservationDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CancelReservationDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CancelReservationDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CancelReservationDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CancelReservationDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CancelReservationDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CancelReservationDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


