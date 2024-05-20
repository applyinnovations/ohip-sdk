# CCManualAuthorizationCriteriaType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Amount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**FolioView** | Pointer to **int32** | The folio window where this authorization is applied. | [optional] 
**HotelId** | Pointer to **string** | Hotel context for the Reservations. | [optional] 
**ManualApprovalCode** | Pointer to **string** | Approval code is required when making a Manual Authorization. | [optional] 
**ReservationIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 

## Methods

### NewCCManualAuthorizationCriteriaType

`func NewCCManualAuthorizationCriteriaType() *CCManualAuthorizationCriteriaType`

NewCCManualAuthorizationCriteriaType instantiates a new CCManualAuthorizationCriteriaType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCCManualAuthorizationCriteriaTypeWithDefaults

`func NewCCManualAuthorizationCriteriaTypeWithDefaults() *CCManualAuthorizationCriteriaType`

NewCCManualAuthorizationCriteriaTypeWithDefaults instantiates a new CCManualAuthorizationCriteriaType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAmount

`func (o *CCManualAuthorizationCriteriaType) GetAmount() CurrencyAmountType`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *CCManualAuthorizationCriteriaType) GetAmountOk() (*CurrencyAmountType, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *CCManualAuthorizationCriteriaType) SetAmount(v CurrencyAmountType)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *CCManualAuthorizationCriteriaType) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetFolioView

`func (o *CCManualAuthorizationCriteriaType) GetFolioView() int32`

GetFolioView returns the FolioView field if non-nil, zero value otherwise.

### GetFolioViewOk

`func (o *CCManualAuthorizationCriteriaType) GetFolioViewOk() (*int32, bool)`

GetFolioViewOk returns a tuple with the FolioView field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioView

`func (o *CCManualAuthorizationCriteriaType) SetFolioView(v int32)`

SetFolioView sets FolioView field to given value.

### HasFolioView

`func (o *CCManualAuthorizationCriteriaType) HasFolioView() bool`

HasFolioView returns a boolean if a field has been set.

### GetHotelId

`func (o *CCManualAuthorizationCriteriaType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *CCManualAuthorizationCriteriaType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *CCManualAuthorizationCriteriaType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *CCManualAuthorizationCriteriaType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetManualApprovalCode

`func (o *CCManualAuthorizationCriteriaType) GetManualApprovalCode() string`

GetManualApprovalCode returns the ManualApprovalCode field if non-nil, zero value otherwise.

### GetManualApprovalCodeOk

`func (o *CCManualAuthorizationCriteriaType) GetManualApprovalCodeOk() (*string, bool)`

GetManualApprovalCodeOk returns a tuple with the ManualApprovalCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManualApprovalCode

`func (o *CCManualAuthorizationCriteriaType) SetManualApprovalCode(v string)`

SetManualApprovalCode sets ManualApprovalCode field to given value.

### HasManualApprovalCode

`func (o *CCManualAuthorizationCriteriaType) HasManualApprovalCode() bool`

HasManualApprovalCode returns a boolean if a field has been set.

### GetReservationIdList

`func (o *CCManualAuthorizationCriteriaType) GetReservationIdList() []UniqueIDType`

GetReservationIdList returns the ReservationIdList field if non-nil, zero value otherwise.

### GetReservationIdListOk

`func (o *CCManualAuthorizationCriteriaType) GetReservationIdListOk() (*[]UniqueIDType, bool)`

GetReservationIdListOk returns a tuple with the ReservationIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationIdList

`func (o *CCManualAuthorizationCriteriaType) SetReservationIdList(v []UniqueIDType)`

SetReservationIdList sets ReservationIdList field to given value.

### HasReservationIdList

`func (o *CCManualAuthorizationCriteriaType) HasReservationIdList() bool`

HasReservationIdList returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


