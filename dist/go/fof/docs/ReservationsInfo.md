# ReservationsInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReservationInfoList** | Pointer to [**ReservationsInfoReservationInfoList**](ReservationsInfoReservationInfoList.md) |  | [optional] 
**MasterInfoList** | Pointer to [**[]MasterInfoType**](MasterInfoType.md) | Refer to Generic common types document | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewReservationsInfo

`func NewReservationsInfo() *ReservationsInfo`

NewReservationsInfo instantiates a new ReservationsInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationsInfoWithDefaults

`func NewReservationsInfoWithDefaults() *ReservationsInfo`

NewReservationsInfoWithDefaults instantiates a new ReservationsInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReservationInfoList

`func (o *ReservationsInfo) GetReservationInfoList() ReservationsInfoReservationInfoList`

GetReservationInfoList returns the ReservationInfoList field if non-nil, zero value otherwise.

### GetReservationInfoListOk

`func (o *ReservationsInfo) GetReservationInfoListOk() (*ReservationsInfoReservationInfoList, bool)`

GetReservationInfoListOk returns a tuple with the ReservationInfoList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationInfoList

`func (o *ReservationsInfo) SetReservationInfoList(v ReservationsInfoReservationInfoList)`

SetReservationInfoList sets ReservationInfoList field to given value.

### HasReservationInfoList

`func (o *ReservationsInfo) HasReservationInfoList() bool`

HasReservationInfoList returns a boolean if a field has been set.

### GetMasterInfoList

`func (o *ReservationsInfo) GetMasterInfoList() []MasterInfoType`

GetMasterInfoList returns the MasterInfoList field if non-nil, zero value otherwise.

### GetMasterInfoListOk

`func (o *ReservationsInfo) GetMasterInfoListOk() (*[]MasterInfoType, bool)`

GetMasterInfoListOk returns a tuple with the MasterInfoList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMasterInfoList

`func (o *ReservationsInfo) SetMasterInfoList(v []MasterInfoType)`

SetMasterInfoList sets MasterInfoList field to given value.

### HasMasterInfoList

`func (o *ReservationsInfo) HasMasterInfoList() bool`

HasMasterInfoList returns a boolean if a field has been set.

### GetLinks

`func (o *ReservationsInfo) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ReservationsInfo) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ReservationsInfo) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ReservationsInfo) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ReservationsInfo) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ReservationsInfo) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ReservationsInfo) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ReservationsInfo) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


