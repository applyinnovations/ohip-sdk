# ReservationDepositFolios

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReservationDepositFoliosInfo** | Pointer to [**[]ReservationDepositFolioInfoType**](ReservationDepositFolioInfoType.md) | Detailed information of a reservation and its deposit payment posting information. | [optional] 
**TrxCodesInfo** | Pointer to [**[]TrxInfoType**](TrxInfoType.md) | List of Transaction codes info. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewReservationDepositFolios

`func NewReservationDepositFolios() *ReservationDepositFolios`

NewReservationDepositFolios instantiates a new ReservationDepositFolios object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationDepositFoliosWithDefaults

`func NewReservationDepositFoliosWithDefaults() *ReservationDepositFolios`

NewReservationDepositFoliosWithDefaults instantiates a new ReservationDepositFolios object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReservationDepositFoliosInfo

`func (o *ReservationDepositFolios) GetReservationDepositFoliosInfo() []ReservationDepositFolioInfoType`

GetReservationDepositFoliosInfo returns the ReservationDepositFoliosInfo field if non-nil, zero value otherwise.

### GetReservationDepositFoliosInfoOk

`func (o *ReservationDepositFolios) GetReservationDepositFoliosInfoOk() (*[]ReservationDepositFolioInfoType, bool)`

GetReservationDepositFoliosInfoOk returns a tuple with the ReservationDepositFoliosInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationDepositFoliosInfo

`func (o *ReservationDepositFolios) SetReservationDepositFoliosInfo(v []ReservationDepositFolioInfoType)`

SetReservationDepositFoliosInfo sets ReservationDepositFoliosInfo field to given value.

### HasReservationDepositFoliosInfo

`func (o *ReservationDepositFolios) HasReservationDepositFoliosInfo() bool`

HasReservationDepositFoliosInfo returns a boolean if a field has been set.

### GetTrxCodesInfo

`func (o *ReservationDepositFolios) GetTrxCodesInfo() []TrxInfoType`

GetTrxCodesInfo returns the TrxCodesInfo field if non-nil, zero value otherwise.

### GetTrxCodesInfoOk

`func (o *ReservationDepositFolios) GetTrxCodesInfoOk() (*[]TrxInfoType, bool)`

GetTrxCodesInfoOk returns a tuple with the TrxCodesInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrxCodesInfo

`func (o *ReservationDepositFolios) SetTrxCodesInfo(v []TrxInfoType)`

SetTrxCodesInfo sets TrxCodesInfo field to given value.

### HasTrxCodesInfo

`func (o *ReservationDepositFolios) HasTrxCodesInfo() bool`

HasTrxCodesInfo returns a boolean if a field has been set.

### GetLinks

`func (o *ReservationDepositFolios) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ReservationDepositFolios) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ReservationDepositFolios) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ReservationDepositFolios) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ReservationDepositFolios) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ReservationDepositFolios) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ReservationDepositFolios) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ReservationDepositFolios) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


