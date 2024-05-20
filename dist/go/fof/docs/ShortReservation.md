# ShortReservation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**ReservationInfoList** | Pointer to [**[]ReservationInfoType**](ReservationInfoType.md) | Short reservation information response. | [optional] 
**ReservationsSummary** | Pointer to [**ReservationsSummaryType**](ReservationsSummaryType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewShortReservation

`func NewShortReservation() *ShortReservation`

NewShortReservation instantiates a new ShortReservation object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewShortReservationWithDefaults

`func NewShortReservationWithDefaults() *ShortReservation`

NewShortReservationWithDefaults instantiates a new ShortReservation object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *ShortReservation) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ShortReservation) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ShortReservation) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ShortReservation) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetReservationInfoList

`func (o *ShortReservation) GetReservationInfoList() []ReservationInfoType`

GetReservationInfoList returns the ReservationInfoList field if non-nil, zero value otherwise.

### GetReservationInfoListOk

`func (o *ShortReservation) GetReservationInfoListOk() (*[]ReservationInfoType, bool)`

GetReservationInfoListOk returns a tuple with the ReservationInfoList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationInfoList

`func (o *ShortReservation) SetReservationInfoList(v []ReservationInfoType)`

SetReservationInfoList sets ReservationInfoList field to given value.

### HasReservationInfoList

`func (o *ShortReservation) HasReservationInfoList() bool`

HasReservationInfoList returns a boolean if a field has been set.

### GetReservationsSummary

`func (o *ShortReservation) GetReservationsSummary() ReservationsSummaryType`

GetReservationsSummary returns the ReservationsSummary field if non-nil, zero value otherwise.

### GetReservationsSummaryOk

`func (o *ShortReservation) GetReservationsSummaryOk() (*ReservationsSummaryType, bool)`

GetReservationsSummaryOk returns a tuple with the ReservationsSummary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationsSummary

`func (o *ShortReservation) SetReservationsSummary(v ReservationsSummaryType)`

SetReservationsSummary sets ReservationsSummary field to given value.

### HasReservationsSummary

`func (o *ShortReservation) HasReservationsSummary() bool`

HasReservationsSummary returns a boolean if a field has been set.

### GetWarnings

`func (o *ShortReservation) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ShortReservation) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ShortReservation) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ShortReservation) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


