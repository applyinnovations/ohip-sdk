# ReservationECertificateType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ActionType** | Pointer to [**RequestActionType**](RequestActionType.md) |  | [optional] 
**ECertificateNo** | Pointer to **string** | ECertificate Number for the reservation. | [optional] 
**ECertificateType** | Pointer to [**ECertificateClassficationType**](ECertificateClassficationType.md) |  | [optional] 

## Methods

### NewReservationECertificateType

`func NewReservationECertificateType() *ReservationECertificateType`

NewReservationECertificateType instantiates a new ReservationECertificateType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationECertificateTypeWithDefaults

`func NewReservationECertificateTypeWithDefaults() *ReservationECertificateType`

NewReservationECertificateTypeWithDefaults instantiates a new ReservationECertificateType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActionType

`func (o *ReservationECertificateType) GetActionType() RequestActionType`

GetActionType returns the ActionType field if non-nil, zero value otherwise.

### GetActionTypeOk

`func (o *ReservationECertificateType) GetActionTypeOk() (*RequestActionType, bool)`

GetActionTypeOk returns a tuple with the ActionType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActionType

`func (o *ReservationECertificateType) SetActionType(v RequestActionType)`

SetActionType sets ActionType field to given value.

### HasActionType

`func (o *ReservationECertificateType) HasActionType() bool`

HasActionType returns a boolean if a field has been set.

### GetECertificateNo

`func (o *ReservationECertificateType) GetECertificateNo() string`

GetECertificateNo returns the ECertificateNo field if non-nil, zero value otherwise.

### GetECertificateNoOk

`func (o *ReservationECertificateType) GetECertificateNoOk() (*string, bool)`

GetECertificateNoOk returns a tuple with the ECertificateNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetECertificateNo

`func (o *ReservationECertificateType) SetECertificateNo(v string)`

SetECertificateNo sets ECertificateNo field to given value.

### HasECertificateNo

`func (o *ReservationECertificateType) HasECertificateNo() bool`

HasECertificateNo returns a boolean if a field has been set.

### GetECertificateType

`func (o *ReservationECertificateType) GetECertificateType() ECertificateClassficationType`

GetECertificateType returns the ECertificateType field if non-nil, zero value otherwise.

### GetECertificateTypeOk

`func (o *ReservationECertificateType) GetECertificateTypeOk() (*ECertificateClassficationType, bool)`

GetECertificateTypeOk returns a tuple with the ECertificateType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetECertificateType

`func (o *ReservationECertificateType) SetECertificateType(v ECertificateClassficationType)`

SetECertificateType sets ECertificateType field to given value.

### HasECertificateType

`func (o *ReservationECertificateType) HasECertificateType() bool`

HasECertificateType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


