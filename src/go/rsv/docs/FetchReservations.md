# FetchReservations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**MasterInfoList** | Pointer to [**[]MasterInfoType**](MasterInfoType.md) | Refer to Generic common types document. | [optional] 
**ReservationInfoList** | Pointer to [**FetchReservationsReservationInfoList**](FetchReservationsReservationInfoList.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewFetchReservations

`func NewFetchReservations() *FetchReservations`

NewFetchReservations instantiates a new FetchReservations object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFetchReservationsWithDefaults

`func NewFetchReservationsWithDefaults() *FetchReservations`

NewFetchReservationsWithDefaults instantiates a new FetchReservations object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *FetchReservations) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *FetchReservations) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *FetchReservations) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *FetchReservations) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetMasterInfoList

`func (o *FetchReservations) GetMasterInfoList() []MasterInfoType`

GetMasterInfoList returns the MasterInfoList field if non-nil, zero value otherwise.

### GetMasterInfoListOk

`func (o *FetchReservations) GetMasterInfoListOk() (*[]MasterInfoType, bool)`

GetMasterInfoListOk returns a tuple with the MasterInfoList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMasterInfoList

`func (o *FetchReservations) SetMasterInfoList(v []MasterInfoType)`

SetMasterInfoList sets MasterInfoList field to given value.

### HasMasterInfoList

`func (o *FetchReservations) HasMasterInfoList() bool`

HasMasterInfoList returns a boolean if a field has been set.

### GetReservationInfoList

`func (o *FetchReservations) GetReservationInfoList() FetchReservationsReservationInfoList`

GetReservationInfoList returns the ReservationInfoList field if non-nil, zero value otherwise.

### GetReservationInfoListOk

`func (o *FetchReservations) GetReservationInfoListOk() (*FetchReservationsReservationInfoList, bool)`

GetReservationInfoListOk returns a tuple with the ReservationInfoList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationInfoList

`func (o *FetchReservations) SetReservationInfoList(v FetchReservationsReservationInfoList)`

SetReservationInfoList sets ReservationInfoList field to given value.

### HasReservationInfoList

`func (o *FetchReservations) HasReservationInfoList() bool`

HasReservationInfoList returns a boolean if a field has been set.

### GetWarnings

`func (o *FetchReservations) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *FetchReservations) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *FetchReservations) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *FetchReservations) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


