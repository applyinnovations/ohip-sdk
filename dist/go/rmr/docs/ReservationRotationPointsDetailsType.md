# ReservationRotationPointsDetailsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StartDate** | Pointer to **string** | Start date of reservation | [optional] 
**EndDate** | Pointer to **string** | End date of reservation | [optional] 
**Type** | Pointer to [**RotationRuleCalculationRuleType**](RotationRuleCalculationRuleType.md) |  | [optional] 
**CurrentPoints** | Pointer to **float32** | Current applicable points for the shown calculation rule for the reservation. | [optional] 
**AdjustPointsTo** | Pointer to **float32** | Override the current points and enter a new value for the respective calculation rule up to 5 decimal places. | [optional] 
**AdjustmentReason** | Pointer to [**ReservationRotationPointsAdjustmentReasonType**](ReservationRotationPointsAdjustmentReasonType.md) |  | [optional] 

## Methods

### NewReservationRotationPointsDetailsType

`func NewReservationRotationPointsDetailsType() *ReservationRotationPointsDetailsType`

NewReservationRotationPointsDetailsType instantiates a new ReservationRotationPointsDetailsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationRotationPointsDetailsTypeWithDefaults

`func NewReservationRotationPointsDetailsTypeWithDefaults() *ReservationRotationPointsDetailsType`

NewReservationRotationPointsDetailsTypeWithDefaults instantiates a new ReservationRotationPointsDetailsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStartDate

`func (o *ReservationRotationPointsDetailsType) GetStartDate() string`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *ReservationRotationPointsDetailsType) GetStartDateOk() (*string, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *ReservationRotationPointsDetailsType) SetStartDate(v string)`

SetStartDate sets StartDate field to given value.

### HasStartDate

`func (o *ReservationRotationPointsDetailsType) HasStartDate() bool`

HasStartDate returns a boolean if a field has been set.

### GetEndDate

`func (o *ReservationRotationPointsDetailsType) GetEndDate() string`

GetEndDate returns the EndDate field if non-nil, zero value otherwise.

### GetEndDateOk

`func (o *ReservationRotationPointsDetailsType) GetEndDateOk() (*string, bool)`

GetEndDateOk returns a tuple with the EndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndDate

`func (o *ReservationRotationPointsDetailsType) SetEndDate(v string)`

SetEndDate sets EndDate field to given value.

### HasEndDate

`func (o *ReservationRotationPointsDetailsType) HasEndDate() bool`

HasEndDate returns a boolean if a field has been set.

### GetType

`func (o *ReservationRotationPointsDetailsType) GetType() RotationRuleCalculationRuleType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ReservationRotationPointsDetailsType) GetTypeOk() (*RotationRuleCalculationRuleType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ReservationRotationPointsDetailsType) SetType(v RotationRuleCalculationRuleType)`

SetType sets Type field to given value.

### HasType

`func (o *ReservationRotationPointsDetailsType) HasType() bool`

HasType returns a boolean if a field has been set.

### GetCurrentPoints

`func (o *ReservationRotationPointsDetailsType) GetCurrentPoints() float32`

GetCurrentPoints returns the CurrentPoints field if non-nil, zero value otherwise.

### GetCurrentPointsOk

`func (o *ReservationRotationPointsDetailsType) GetCurrentPointsOk() (*float32, bool)`

GetCurrentPointsOk returns a tuple with the CurrentPoints field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrentPoints

`func (o *ReservationRotationPointsDetailsType) SetCurrentPoints(v float32)`

SetCurrentPoints sets CurrentPoints field to given value.

### HasCurrentPoints

`func (o *ReservationRotationPointsDetailsType) HasCurrentPoints() bool`

HasCurrentPoints returns a boolean if a field has been set.

### GetAdjustPointsTo

`func (o *ReservationRotationPointsDetailsType) GetAdjustPointsTo() float32`

GetAdjustPointsTo returns the AdjustPointsTo field if non-nil, zero value otherwise.

### GetAdjustPointsToOk

`func (o *ReservationRotationPointsDetailsType) GetAdjustPointsToOk() (*float32, bool)`

GetAdjustPointsToOk returns a tuple with the AdjustPointsTo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdjustPointsTo

`func (o *ReservationRotationPointsDetailsType) SetAdjustPointsTo(v float32)`

SetAdjustPointsTo sets AdjustPointsTo field to given value.

### HasAdjustPointsTo

`func (o *ReservationRotationPointsDetailsType) HasAdjustPointsTo() bool`

HasAdjustPointsTo returns a boolean if a field has been set.

### GetAdjustmentReason

`func (o *ReservationRotationPointsDetailsType) GetAdjustmentReason() ReservationRotationPointsAdjustmentReasonType`

GetAdjustmentReason returns the AdjustmentReason field if non-nil, zero value otherwise.

### GetAdjustmentReasonOk

`func (o *ReservationRotationPointsDetailsType) GetAdjustmentReasonOk() (*ReservationRotationPointsAdjustmentReasonType, bool)`

GetAdjustmentReasonOk returns a tuple with the AdjustmentReason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdjustmentReason

`func (o *ReservationRotationPointsDetailsType) SetAdjustmentReason(v ReservationRotationPointsAdjustmentReasonType)`

SetAdjustmentReason sets AdjustmentReason field to given value.

### HasAdjustmentReason

`func (o *ReservationRotationPointsDetailsType) HasAdjustmentReason() bool`

HasAdjustmentReason returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


