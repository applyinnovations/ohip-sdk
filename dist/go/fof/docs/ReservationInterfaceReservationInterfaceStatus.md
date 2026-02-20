# ReservationInterfaceReservationInterfaceStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Logo** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**InterfaceStatusList** | Pointer to [**[]ChangeInterfaceStatusType**](ChangeInterfaceStatusType.md) | Collection of reservation and interface information. | [optional] 

## Methods

### NewReservationInterfaceReservationInterfaceStatus

`func NewReservationInterfaceReservationInterfaceStatus() *ReservationInterfaceReservationInterfaceStatus`

NewReservationInterfaceReservationInterfaceStatus instantiates a new ReservationInterfaceReservationInterfaceStatus object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationInterfaceReservationInterfaceStatusWithDefaults

`func NewReservationInterfaceReservationInterfaceStatusWithDefaults() *ReservationInterfaceReservationInterfaceStatus`

NewReservationInterfaceReservationInterfaceStatusWithDefaults instantiates a new ReservationInterfaceReservationInterfaceStatus object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLogo

`func (o *ReservationInterfaceReservationInterfaceStatus) GetLogo() string`

GetLogo returns the Logo field if non-nil, zero value otherwise.

### GetLogoOk

`func (o *ReservationInterfaceReservationInterfaceStatus) GetLogoOk() (*string, bool)`

GetLogoOk returns a tuple with the Logo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLogo

`func (o *ReservationInterfaceReservationInterfaceStatus) SetLogo(v string)`

SetLogo sets Logo field to given value.

### HasLogo

`func (o *ReservationInterfaceReservationInterfaceStatus) HasLogo() bool`

HasLogo returns a boolean if a field has been set.

### GetInterfaceStatusList

`func (o *ReservationInterfaceReservationInterfaceStatus) GetInterfaceStatusList() []ChangeInterfaceStatusType`

GetInterfaceStatusList returns the InterfaceStatusList field if non-nil, zero value otherwise.

### GetInterfaceStatusListOk

`func (o *ReservationInterfaceReservationInterfaceStatus) GetInterfaceStatusListOk() (*[]ChangeInterfaceStatusType, bool)`

GetInterfaceStatusListOk returns a tuple with the InterfaceStatusList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterfaceStatusList

`func (o *ReservationInterfaceReservationInterfaceStatus) SetInterfaceStatusList(v []ChangeInterfaceStatusType)`

SetInterfaceStatusList sets InterfaceStatusList field to given value.

### HasInterfaceStatusList

`func (o *ReservationInterfaceReservationInterfaceStatus) HasInterfaceStatusList() bool`

HasInterfaceStatusList returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


