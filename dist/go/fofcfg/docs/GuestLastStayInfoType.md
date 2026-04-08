# GuestLastStayInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LastStayDate** | Pointer to **string** | Guest&#39;s last stay date. | [optional] 
**LastStayRoom** | Pointer to **string** | Room Number where the guest stayed. | [optional] 
**LastStayRate** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**TotalStay** | Pointer to **int32** | The total number of previous stay of the guest. | [optional] 

## Methods

### NewGuestLastStayInfoType

`func NewGuestLastStayInfoType() *GuestLastStayInfoType`

NewGuestLastStayInfoType instantiates a new GuestLastStayInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGuestLastStayInfoTypeWithDefaults

`func NewGuestLastStayInfoTypeWithDefaults() *GuestLastStayInfoType`

NewGuestLastStayInfoTypeWithDefaults instantiates a new GuestLastStayInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLastStayDate

`func (o *GuestLastStayInfoType) GetLastStayDate() string`

GetLastStayDate returns the LastStayDate field if non-nil, zero value otherwise.

### GetLastStayDateOk

`func (o *GuestLastStayInfoType) GetLastStayDateOk() (*string, bool)`

GetLastStayDateOk returns a tuple with the LastStayDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastStayDate

`func (o *GuestLastStayInfoType) SetLastStayDate(v string)`

SetLastStayDate sets LastStayDate field to given value.

### HasLastStayDate

`func (o *GuestLastStayInfoType) HasLastStayDate() bool`

HasLastStayDate returns a boolean if a field has been set.

### GetLastStayRoom

`func (o *GuestLastStayInfoType) GetLastStayRoom() string`

GetLastStayRoom returns the LastStayRoom field if non-nil, zero value otherwise.

### GetLastStayRoomOk

`func (o *GuestLastStayInfoType) GetLastStayRoomOk() (*string, bool)`

GetLastStayRoomOk returns a tuple with the LastStayRoom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastStayRoom

`func (o *GuestLastStayInfoType) SetLastStayRoom(v string)`

SetLastStayRoom sets LastStayRoom field to given value.

### HasLastStayRoom

`func (o *GuestLastStayInfoType) HasLastStayRoom() bool`

HasLastStayRoom returns a boolean if a field has been set.

### GetLastStayRate

`func (o *GuestLastStayInfoType) GetLastStayRate() CurrencyAmountType`

GetLastStayRate returns the LastStayRate field if non-nil, zero value otherwise.

### GetLastStayRateOk

`func (o *GuestLastStayInfoType) GetLastStayRateOk() (*CurrencyAmountType, bool)`

GetLastStayRateOk returns a tuple with the LastStayRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastStayRate

`func (o *GuestLastStayInfoType) SetLastStayRate(v CurrencyAmountType)`

SetLastStayRate sets LastStayRate field to given value.

### HasLastStayRate

`func (o *GuestLastStayInfoType) HasLastStayRate() bool`

HasLastStayRate returns a boolean if a field has been set.

### GetTotalStay

`func (o *GuestLastStayInfoType) GetTotalStay() int32`

GetTotalStay returns the TotalStay field if non-nil, zero value otherwise.

### GetTotalStayOk

`func (o *GuestLastStayInfoType) GetTotalStayOk() (*int32, bool)`

GetTotalStayOk returns a tuple with the TotalStay field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalStay

`func (o *GuestLastStayInfoType) SetTotalStay(v int32)`

SetTotalStay sets TotalStay field to given value.

### HasTotalStay

`func (o *GuestLastStayInfoType) HasTotalStay() bool`

HasTotalStay returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


