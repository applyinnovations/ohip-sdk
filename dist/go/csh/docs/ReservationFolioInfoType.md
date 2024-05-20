# ReservationFolioInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AutoCheckInAllowed** | Pointer to **bool** | Flag specifying that the reservation can be auto check in when Auto Checkin Pseudo Room parameter is active. | [optional] 
**CorrectionTrxExists** | Pointer to **bool** | Flag indicating if a folio window contains a correction trx. A correction trx indicates a pending required fiscal action over the folio window. Applicable only in Greece. | [optional] 
**DeferredTaxesPosted** | Pointer to **string** | Flag applicable only when ALLOW_DEFERRED_TAXES is ON for the resort. Set to true only when there are any unsettled transactions on any of the windows with the deferred tax entry posted. Set to false only when there are unsettled transactions on any of the windows without deferred tax entry. | [optional] 
**FolioHistory** | Pointer to [**[]FolioWindowType**](FolioWindowType.md) | Folio History element contains all generated folios | [optional] 
**FolioWindows** | Pointer to [**[]FolioWindowType**](FolioWindowType.md) | The Folio Window information of the reservation. | [optional] 
**PostStayChargeAllowed** | Pointer to **bool** | Computed flag specifying that the reservation has met the criteria which allows charges to be posted after being checked-out. | [optional] 
**PostToNoShowCancelAllowed** | Pointer to **bool** | Flag specifying that the reservation can post if the reservation status was No Show or Cancelled. | [optional] 
**PreStayChargeAllowed** | Pointer to **bool** | Computed flag specifying that the reservation has met the criteria which allows charges to be posted before checking-in. | [optional] 
**ReservationInfo** | Pointer to [**ReservationInfoType**](ReservationInfoType.md) |  | [optional] 
**RoomAndTaxPosted** | Pointer to **bool** | Flag to check if the room and tax are already posted. | [optional] 
**StampDutyExists** | Pointer to **bool** | Stamp Duty posted in at least one folio window. | [optional] 

## Methods

### NewReservationFolioInfoType

`func NewReservationFolioInfoType() *ReservationFolioInfoType`

NewReservationFolioInfoType instantiates a new ReservationFolioInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationFolioInfoTypeWithDefaults

`func NewReservationFolioInfoTypeWithDefaults() *ReservationFolioInfoType`

NewReservationFolioInfoTypeWithDefaults instantiates a new ReservationFolioInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAutoCheckInAllowed

`func (o *ReservationFolioInfoType) GetAutoCheckInAllowed() bool`

GetAutoCheckInAllowed returns the AutoCheckInAllowed field if non-nil, zero value otherwise.

### GetAutoCheckInAllowedOk

`func (o *ReservationFolioInfoType) GetAutoCheckInAllowedOk() (*bool, bool)`

GetAutoCheckInAllowedOk returns a tuple with the AutoCheckInAllowed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoCheckInAllowed

`func (o *ReservationFolioInfoType) SetAutoCheckInAllowed(v bool)`

SetAutoCheckInAllowed sets AutoCheckInAllowed field to given value.

### HasAutoCheckInAllowed

`func (o *ReservationFolioInfoType) HasAutoCheckInAllowed() bool`

HasAutoCheckInAllowed returns a boolean if a field has been set.

### GetCorrectionTrxExists

`func (o *ReservationFolioInfoType) GetCorrectionTrxExists() bool`

GetCorrectionTrxExists returns the CorrectionTrxExists field if non-nil, zero value otherwise.

### GetCorrectionTrxExistsOk

`func (o *ReservationFolioInfoType) GetCorrectionTrxExistsOk() (*bool, bool)`

GetCorrectionTrxExistsOk returns a tuple with the CorrectionTrxExists field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCorrectionTrxExists

`func (o *ReservationFolioInfoType) SetCorrectionTrxExists(v bool)`

SetCorrectionTrxExists sets CorrectionTrxExists field to given value.

### HasCorrectionTrxExists

`func (o *ReservationFolioInfoType) HasCorrectionTrxExists() bool`

HasCorrectionTrxExists returns a boolean if a field has been set.

### GetDeferredTaxesPosted

`func (o *ReservationFolioInfoType) GetDeferredTaxesPosted() string`

GetDeferredTaxesPosted returns the DeferredTaxesPosted field if non-nil, zero value otherwise.

### GetDeferredTaxesPostedOk

`func (o *ReservationFolioInfoType) GetDeferredTaxesPostedOk() (*string, bool)`

GetDeferredTaxesPostedOk returns a tuple with the DeferredTaxesPosted field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeferredTaxesPosted

`func (o *ReservationFolioInfoType) SetDeferredTaxesPosted(v string)`

SetDeferredTaxesPosted sets DeferredTaxesPosted field to given value.

### HasDeferredTaxesPosted

`func (o *ReservationFolioInfoType) HasDeferredTaxesPosted() bool`

HasDeferredTaxesPosted returns a boolean if a field has been set.

### GetFolioHistory

`func (o *ReservationFolioInfoType) GetFolioHistory() []FolioWindowType`

GetFolioHistory returns the FolioHistory field if non-nil, zero value otherwise.

### GetFolioHistoryOk

`func (o *ReservationFolioInfoType) GetFolioHistoryOk() (*[]FolioWindowType, bool)`

GetFolioHistoryOk returns a tuple with the FolioHistory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioHistory

`func (o *ReservationFolioInfoType) SetFolioHistory(v []FolioWindowType)`

SetFolioHistory sets FolioHistory field to given value.

### HasFolioHistory

`func (o *ReservationFolioInfoType) HasFolioHistory() bool`

HasFolioHistory returns a boolean if a field has been set.

### GetFolioWindows

`func (o *ReservationFolioInfoType) GetFolioWindows() []FolioWindowType`

GetFolioWindows returns the FolioWindows field if non-nil, zero value otherwise.

### GetFolioWindowsOk

`func (o *ReservationFolioInfoType) GetFolioWindowsOk() (*[]FolioWindowType, bool)`

GetFolioWindowsOk returns a tuple with the FolioWindows field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioWindows

`func (o *ReservationFolioInfoType) SetFolioWindows(v []FolioWindowType)`

SetFolioWindows sets FolioWindows field to given value.

### HasFolioWindows

`func (o *ReservationFolioInfoType) HasFolioWindows() bool`

HasFolioWindows returns a boolean if a field has been set.

### GetPostStayChargeAllowed

`func (o *ReservationFolioInfoType) GetPostStayChargeAllowed() bool`

GetPostStayChargeAllowed returns the PostStayChargeAllowed field if non-nil, zero value otherwise.

### GetPostStayChargeAllowedOk

`func (o *ReservationFolioInfoType) GetPostStayChargeAllowedOk() (*bool, bool)`

GetPostStayChargeAllowedOk returns a tuple with the PostStayChargeAllowed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostStayChargeAllowed

`func (o *ReservationFolioInfoType) SetPostStayChargeAllowed(v bool)`

SetPostStayChargeAllowed sets PostStayChargeAllowed field to given value.

### HasPostStayChargeAllowed

`func (o *ReservationFolioInfoType) HasPostStayChargeAllowed() bool`

HasPostStayChargeAllowed returns a boolean if a field has been set.

### GetPostToNoShowCancelAllowed

`func (o *ReservationFolioInfoType) GetPostToNoShowCancelAllowed() bool`

GetPostToNoShowCancelAllowed returns the PostToNoShowCancelAllowed field if non-nil, zero value otherwise.

### GetPostToNoShowCancelAllowedOk

`func (o *ReservationFolioInfoType) GetPostToNoShowCancelAllowedOk() (*bool, bool)`

GetPostToNoShowCancelAllowedOk returns a tuple with the PostToNoShowCancelAllowed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostToNoShowCancelAllowed

`func (o *ReservationFolioInfoType) SetPostToNoShowCancelAllowed(v bool)`

SetPostToNoShowCancelAllowed sets PostToNoShowCancelAllowed field to given value.

### HasPostToNoShowCancelAllowed

`func (o *ReservationFolioInfoType) HasPostToNoShowCancelAllowed() bool`

HasPostToNoShowCancelAllowed returns a boolean if a field has been set.

### GetPreStayChargeAllowed

`func (o *ReservationFolioInfoType) GetPreStayChargeAllowed() bool`

GetPreStayChargeAllowed returns the PreStayChargeAllowed field if non-nil, zero value otherwise.

### GetPreStayChargeAllowedOk

`func (o *ReservationFolioInfoType) GetPreStayChargeAllowedOk() (*bool, bool)`

GetPreStayChargeAllowedOk returns a tuple with the PreStayChargeAllowed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreStayChargeAllowed

`func (o *ReservationFolioInfoType) SetPreStayChargeAllowed(v bool)`

SetPreStayChargeAllowed sets PreStayChargeAllowed field to given value.

### HasPreStayChargeAllowed

`func (o *ReservationFolioInfoType) HasPreStayChargeAllowed() bool`

HasPreStayChargeAllowed returns a boolean if a field has been set.

### GetReservationInfo

`func (o *ReservationFolioInfoType) GetReservationInfo() ReservationInfoType`

GetReservationInfo returns the ReservationInfo field if non-nil, zero value otherwise.

### GetReservationInfoOk

`func (o *ReservationFolioInfoType) GetReservationInfoOk() (*ReservationInfoType, bool)`

GetReservationInfoOk returns a tuple with the ReservationInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationInfo

`func (o *ReservationFolioInfoType) SetReservationInfo(v ReservationInfoType)`

SetReservationInfo sets ReservationInfo field to given value.

### HasReservationInfo

`func (o *ReservationFolioInfoType) HasReservationInfo() bool`

HasReservationInfo returns a boolean if a field has been set.

### GetRoomAndTaxPosted

`func (o *ReservationFolioInfoType) GetRoomAndTaxPosted() bool`

GetRoomAndTaxPosted returns the RoomAndTaxPosted field if non-nil, zero value otherwise.

### GetRoomAndTaxPostedOk

`func (o *ReservationFolioInfoType) GetRoomAndTaxPostedOk() (*bool, bool)`

GetRoomAndTaxPostedOk returns a tuple with the RoomAndTaxPosted field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomAndTaxPosted

`func (o *ReservationFolioInfoType) SetRoomAndTaxPosted(v bool)`

SetRoomAndTaxPosted sets RoomAndTaxPosted field to given value.

### HasRoomAndTaxPosted

`func (o *ReservationFolioInfoType) HasRoomAndTaxPosted() bool`

HasRoomAndTaxPosted returns a boolean if a field has been set.

### GetStampDutyExists

`func (o *ReservationFolioInfoType) GetStampDutyExists() bool`

GetStampDutyExists returns the StampDutyExists field if non-nil, zero value otherwise.

### GetStampDutyExistsOk

`func (o *ReservationFolioInfoType) GetStampDutyExistsOk() (*bool, bool)`

GetStampDutyExistsOk returns a tuple with the StampDutyExists field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStampDutyExists

`func (o *ReservationFolioInfoType) SetStampDutyExists(v bool)`

SetStampDutyExists sets StampDutyExists field to given value.

### HasStampDutyExists

`func (o *ReservationFolioInfoType) HasStampDutyExists() bool`

HasStampDutyExists returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


