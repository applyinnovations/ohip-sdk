# LastStayInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LastVisit** | Pointer to **string** | Used to hold last stay information for the profile. | [optional] 
**LastRoom** | Pointer to **string** | Used to hold last room information for the profile. | [optional] 
**LastRate** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**TotalStay** | Pointer to **int32** | The total number of previous stay of the profile. | [optional] 

## Methods

### NewLastStayInfoType

`func NewLastStayInfoType() *LastStayInfoType`

NewLastStayInfoType instantiates a new LastStayInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLastStayInfoTypeWithDefaults

`func NewLastStayInfoTypeWithDefaults() *LastStayInfoType`

NewLastStayInfoTypeWithDefaults instantiates a new LastStayInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLastVisit

`func (o *LastStayInfoType) GetLastVisit() string`

GetLastVisit returns the LastVisit field if non-nil, zero value otherwise.

### GetLastVisitOk

`func (o *LastStayInfoType) GetLastVisitOk() (*string, bool)`

GetLastVisitOk returns a tuple with the LastVisit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastVisit

`func (o *LastStayInfoType) SetLastVisit(v string)`

SetLastVisit sets LastVisit field to given value.

### HasLastVisit

`func (o *LastStayInfoType) HasLastVisit() bool`

HasLastVisit returns a boolean if a field has been set.

### GetLastRoom

`func (o *LastStayInfoType) GetLastRoom() string`

GetLastRoom returns the LastRoom field if non-nil, zero value otherwise.

### GetLastRoomOk

`func (o *LastStayInfoType) GetLastRoomOk() (*string, bool)`

GetLastRoomOk returns a tuple with the LastRoom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastRoom

`func (o *LastStayInfoType) SetLastRoom(v string)`

SetLastRoom sets LastRoom field to given value.

### HasLastRoom

`func (o *LastStayInfoType) HasLastRoom() bool`

HasLastRoom returns a boolean if a field has been set.

### GetLastRate

`func (o *LastStayInfoType) GetLastRate() CurrencyAmountType`

GetLastRate returns the LastRate field if non-nil, zero value otherwise.

### GetLastRateOk

`func (o *LastStayInfoType) GetLastRateOk() (*CurrencyAmountType, bool)`

GetLastRateOk returns a tuple with the LastRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastRate

`func (o *LastStayInfoType) SetLastRate(v CurrencyAmountType)`

SetLastRate sets LastRate field to given value.

### HasLastRate

`func (o *LastStayInfoType) HasLastRate() bool`

HasLastRate returns a boolean if a field has been set.

### GetTotalStay

`func (o *LastStayInfoType) GetTotalStay() int32`

GetTotalStay returns the TotalStay field if non-nil, zero value otherwise.

### GetTotalStayOk

`func (o *LastStayInfoType) GetTotalStayOk() (*int32, bool)`

GetTotalStayOk returns a tuple with the TotalStay field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalStay

`func (o *LastStayInfoType) SetTotalStay(v int32)`

SetTotalStay sets TotalStay field to given value.

### HasTotalStay

`func (o *LastStayInfoType) HasTotalStay() bool`

HasTotalStay returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


