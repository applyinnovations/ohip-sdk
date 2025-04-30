# GetReservationRotationPointsDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReservationDetails** | Pointer to [**ReservationDetailsType**](ReservationDetailsType.md) |  | [optional] 
**ReservationRotationPointsDetailsList** | Pointer to [**ReservationRotationPointsDetailsListType**](ReservationRotationPointsDetailsListType.md) |  | [optional] 
**AdjustmentLogList** | Pointer to [**ReservationRotationPointsAdjustmentLogListType**](ReservationRotationPointsAdjustmentLogListType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewGetReservationRotationPointsDetails

`func NewGetReservationRotationPointsDetails() *GetReservationRotationPointsDetails`

NewGetReservationRotationPointsDetails instantiates a new GetReservationRotationPointsDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetReservationRotationPointsDetailsWithDefaults

`func NewGetReservationRotationPointsDetailsWithDefaults() *GetReservationRotationPointsDetails`

NewGetReservationRotationPointsDetailsWithDefaults instantiates a new GetReservationRotationPointsDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReservationDetails

`func (o *GetReservationRotationPointsDetails) GetReservationDetails() ReservationDetailsType`

GetReservationDetails returns the ReservationDetails field if non-nil, zero value otherwise.

### GetReservationDetailsOk

`func (o *GetReservationRotationPointsDetails) GetReservationDetailsOk() (*ReservationDetailsType, bool)`

GetReservationDetailsOk returns a tuple with the ReservationDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationDetails

`func (o *GetReservationRotationPointsDetails) SetReservationDetails(v ReservationDetailsType)`

SetReservationDetails sets ReservationDetails field to given value.

### HasReservationDetails

`func (o *GetReservationRotationPointsDetails) HasReservationDetails() bool`

HasReservationDetails returns a boolean if a field has been set.

### GetReservationRotationPointsDetailsList

`func (o *GetReservationRotationPointsDetails) GetReservationRotationPointsDetailsList() ReservationRotationPointsDetailsListType`

GetReservationRotationPointsDetailsList returns the ReservationRotationPointsDetailsList field if non-nil, zero value otherwise.

### GetReservationRotationPointsDetailsListOk

`func (o *GetReservationRotationPointsDetails) GetReservationRotationPointsDetailsListOk() (*ReservationRotationPointsDetailsListType, bool)`

GetReservationRotationPointsDetailsListOk returns a tuple with the ReservationRotationPointsDetailsList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationRotationPointsDetailsList

`func (o *GetReservationRotationPointsDetails) SetReservationRotationPointsDetailsList(v ReservationRotationPointsDetailsListType)`

SetReservationRotationPointsDetailsList sets ReservationRotationPointsDetailsList field to given value.

### HasReservationRotationPointsDetailsList

`func (o *GetReservationRotationPointsDetails) HasReservationRotationPointsDetailsList() bool`

HasReservationRotationPointsDetailsList returns a boolean if a field has been set.

### GetAdjustmentLogList

`func (o *GetReservationRotationPointsDetails) GetAdjustmentLogList() ReservationRotationPointsAdjustmentLogListType`

GetAdjustmentLogList returns the AdjustmentLogList field if non-nil, zero value otherwise.

### GetAdjustmentLogListOk

`func (o *GetReservationRotationPointsDetails) GetAdjustmentLogListOk() (*ReservationRotationPointsAdjustmentLogListType, bool)`

GetAdjustmentLogListOk returns a tuple with the AdjustmentLogList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdjustmentLogList

`func (o *GetReservationRotationPointsDetails) SetAdjustmentLogList(v ReservationRotationPointsAdjustmentLogListType)`

SetAdjustmentLogList sets AdjustmentLogList field to given value.

### HasAdjustmentLogList

`func (o *GetReservationRotationPointsDetails) HasAdjustmentLogList() bool`

HasAdjustmentLogList returns a boolean if a field has been set.

### GetLinks

`func (o *GetReservationRotationPointsDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *GetReservationRotationPointsDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *GetReservationRotationPointsDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *GetReservationRotationPointsDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *GetReservationRotationPointsDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *GetReservationRotationPointsDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *GetReservationRotationPointsDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *GetReservationRotationPointsDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


