# PaymentInstructionsMassUpdateCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReservationIds** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique ID of reservations to be updated. | [optional] 
**MassUpdateFolioWindowTypes** | Pointer to [**[]MassUpdateFolioWindowType**](MassUpdateFolioWindowType.md) | Collection of reservation folio windows. | [optional] 
**UpdatePostingRestriction** | Pointer to **bool** | Flag to indicate if postingRestriction is to be updated. | [optional] [default to false]
**PostingRestriction** | Pointer to **bool** | Indicates if the reservation has posting restriction. | [optional] [default to false]
**UpdatePreStayCharging** | Pointer to **bool** | Flag to indicate if preStayCharging is to be updated. | [optional] [default to false]
**PreStayCharging** | Pointer to **bool** | Indicates if the reservation has charging privileges before arrival. | [optional] [default to false]
**UpdatePostStayCharging** | Pointer to **bool** | Flag to indicate if postStayCharging is to be updated. | [optional] [default to false]
**PostStayCharging** | Pointer to **bool** | Indicates if the reservation has charging privileges after checkout. | [optional] [default to false]

## Methods

### NewPaymentInstructionsMassUpdateCriteria

`func NewPaymentInstructionsMassUpdateCriteria() *PaymentInstructionsMassUpdateCriteria`

NewPaymentInstructionsMassUpdateCriteria instantiates a new PaymentInstructionsMassUpdateCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPaymentInstructionsMassUpdateCriteriaWithDefaults

`func NewPaymentInstructionsMassUpdateCriteriaWithDefaults() *PaymentInstructionsMassUpdateCriteria`

NewPaymentInstructionsMassUpdateCriteriaWithDefaults instantiates a new PaymentInstructionsMassUpdateCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReservationIds

`func (o *PaymentInstructionsMassUpdateCriteria) GetReservationIds() []UniqueIDType`

GetReservationIds returns the ReservationIds field if non-nil, zero value otherwise.

### GetReservationIdsOk

`func (o *PaymentInstructionsMassUpdateCriteria) GetReservationIdsOk() (*[]UniqueIDType, bool)`

GetReservationIdsOk returns a tuple with the ReservationIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationIds

`func (o *PaymentInstructionsMassUpdateCriteria) SetReservationIds(v []UniqueIDType)`

SetReservationIds sets ReservationIds field to given value.

### HasReservationIds

`func (o *PaymentInstructionsMassUpdateCriteria) HasReservationIds() bool`

HasReservationIds returns a boolean if a field has been set.

### GetMassUpdateFolioWindowTypes

`func (o *PaymentInstructionsMassUpdateCriteria) GetMassUpdateFolioWindowTypes() []MassUpdateFolioWindowType`

GetMassUpdateFolioWindowTypes returns the MassUpdateFolioWindowTypes field if non-nil, zero value otherwise.

### GetMassUpdateFolioWindowTypesOk

`func (o *PaymentInstructionsMassUpdateCriteria) GetMassUpdateFolioWindowTypesOk() (*[]MassUpdateFolioWindowType, bool)`

GetMassUpdateFolioWindowTypesOk returns a tuple with the MassUpdateFolioWindowTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMassUpdateFolioWindowTypes

`func (o *PaymentInstructionsMassUpdateCriteria) SetMassUpdateFolioWindowTypes(v []MassUpdateFolioWindowType)`

SetMassUpdateFolioWindowTypes sets MassUpdateFolioWindowTypes field to given value.

### HasMassUpdateFolioWindowTypes

`func (o *PaymentInstructionsMassUpdateCriteria) HasMassUpdateFolioWindowTypes() bool`

HasMassUpdateFolioWindowTypes returns a boolean if a field has been set.

### GetUpdatePostingRestriction

`func (o *PaymentInstructionsMassUpdateCriteria) GetUpdatePostingRestriction() bool`

GetUpdatePostingRestriction returns the UpdatePostingRestriction field if non-nil, zero value otherwise.

### GetUpdatePostingRestrictionOk

`func (o *PaymentInstructionsMassUpdateCriteria) GetUpdatePostingRestrictionOk() (*bool, bool)`

GetUpdatePostingRestrictionOk returns a tuple with the UpdatePostingRestriction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatePostingRestriction

`func (o *PaymentInstructionsMassUpdateCriteria) SetUpdatePostingRestriction(v bool)`

SetUpdatePostingRestriction sets UpdatePostingRestriction field to given value.

### HasUpdatePostingRestriction

`func (o *PaymentInstructionsMassUpdateCriteria) HasUpdatePostingRestriction() bool`

HasUpdatePostingRestriction returns a boolean if a field has been set.

### GetPostingRestriction

`func (o *PaymentInstructionsMassUpdateCriteria) GetPostingRestriction() bool`

GetPostingRestriction returns the PostingRestriction field if non-nil, zero value otherwise.

### GetPostingRestrictionOk

`func (o *PaymentInstructionsMassUpdateCriteria) GetPostingRestrictionOk() (*bool, bool)`

GetPostingRestrictionOk returns a tuple with the PostingRestriction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostingRestriction

`func (o *PaymentInstructionsMassUpdateCriteria) SetPostingRestriction(v bool)`

SetPostingRestriction sets PostingRestriction field to given value.

### HasPostingRestriction

`func (o *PaymentInstructionsMassUpdateCriteria) HasPostingRestriction() bool`

HasPostingRestriction returns a boolean if a field has been set.

### GetUpdatePreStayCharging

`func (o *PaymentInstructionsMassUpdateCriteria) GetUpdatePreStayCharging() bool`

GetUpdatePreStayCharging returns the UpdatePreStayCharging field if non-nil, zero value otherwise.

### GetUpdatePreStayChargingOk

`func (o *PaymentInstructionsMassUpdateCriteria) GetUpdatePreStayChargingOk() (*bool, bool)`

GetUpdatePreStayChargingOk returns a tuple with the UpdatePreStayCharging field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatePreStayCharging

`func (o *PaymentInstructionsMassUpdateCriteria) SetUpdatePreStayCharging(v bool)`

SetUpdatePreStayCharging sets UpdatePreStayCharging field to given value.

### HasUpdatePreStayCharging

`func (o *PaymentInstructionsMassUpdateCriteria) HasUpdatePreStayCharging() bool`

HasUpdatePreStayCharging returns a boolean if a field has been set.

### GetPreStayCharging

`func (o *PaymentInstructionsMassUpdateCriteria) GetPreStayCharging() bool`

GetPreStayCharging returns the PreStayCharging field if non-nil, zero value otherwise.

### GetPreStayChargingOk

`func (o *PaymentInstructionsMassUpdateCriteria) GetPreStayChargingOk() (*bool, bool)`

GetPreStayChargingOk returns a tuple with the PreStayCharging field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreStayCharging

`func (o *PaymentInstructionsMassUpdateCriteria) SetPreStayCharging(v bool)`

SetPreStayCharging sets PreStayCharging field to given value.

### HasPreStayCharging

`func (o *PaymentInstructionsMassUpdateCriteria) HasPreStayCharging() bool`

HasPreStayCharging returns a boolean if a field has been set.

### GetUpdatePostStayCharging

`func (o *PaymentInstructionsMassUpdateCriteria) GetUpdatePostStayCharging() bool`

GetUpdatePostStayCharging returns the UpdatePostStayCharging field if non-nil, zero value otherwise.

### GetUpdatePostStayChargingOk

`func (o *PaymentInstructionsMassUpdateCriteria) GetUpdatePostStayChargingOk() (*bool, bool)`

GetUpdatePostStayChargingOk returns a tuple with the UpdatePostStayCharging field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatePostStayCharging

`func (o *PaymentInstructionsMassUpdateCriteria) SetUpdatePostStayCharging(v bool)`

SetUpdatePostStayCharging sets UpdatePostStayCharging field to given value.

### HasUpdatePostStayCharging

`func (o *PaymentInstructionsMassUpdateCriteria) HasUpdatePostStayCharging() bool`

HasUpdatePostStayCharging returns a boolean if a field has been set.

### GetPostStayCharging

`func (o *PaymentInstructionsMassUpdateCriteria) GetPostStayCharging() bool`

GetPostStayCharging returns the PostStayCharging field if non-nil, zero value otherwise.

### GetPostStayChargingOk

`func (o *PaymentInstructionsMassUpdateCriteria) GetPostStayChargingOk() (*bool, bool)`

GetPostStayChargingOk returns a tuple with the PostStayCharging field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostStayCharging

`func (o *PaymentInstructionsMassUpdateCriteria) SetPostStayCharging(v bool)`

SetPostStayCharging sets PostStayCharging field to given value.

### HasPostStayCharging

`func (o *PaymentInstructionsMassUpdateCriteria) HasPostStayCharging() bool`

HasPostStayCharging returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


