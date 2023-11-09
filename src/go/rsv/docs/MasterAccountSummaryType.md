# MasterAccountSummaryType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreateBusinessDate** | Pointer to **string** | Business Date when the reservation was created. | [optional] 
**CreateDateTime** | Pointer to **string** | Time stamp of the creation. | [optional] 
**CreatorId** | Pointer to **string** | ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation. | [optional] 
**LastModifierId** | Pointer to **string** | Identifies the last software system or person to modify a record. | [optional] 
**LastModifyDateTime** | Pointer to **string** | Time stamp of last modification. | [optional] 
**PurgeDate** | Pointer to **string** | Date an item will be purged from a database (e.g., from a live database to an archive). | [optional] 
**ReservationIdList** | Pointer to [**ReservationIdList**](ReservationIdList.md) |  | [optional] 

## Methods

### NewMasterAccountSummaryType

`func NewMasterAccountSummaryType() *MasterAccountSummaryType`

NewMasterAccountSummaryType instantiates a new MasterAccountSummaryType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMasterAccountSummaryTypeWithDefaults

`func NewMasterAccountSummaryTypeWithDefaults() *MasterAccountSummaryType`

NewMasterAccountSummaryTypeWithDefaults instantiates a new MasterAccountSummaryType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCreateBusinessDate

`func (o *MasterAccountSummaryType) GetCreateBusinessDate() string`

GetCreateBusinessDate returns the CreateBusinessDate field if non-nil, zero value otherwise.

### GetCreateBusinessDateOk

`func (o *MasterAccountSummaryType) GetCreateBusinessDateOk() (*string, bool)`

GetCreateBusinessDateOk returns a tuple with the CreateBusinessDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreateBusinessDate

`func (o *MasterAccountSummaryType) SetCreateBusinessDate(v string)`

SetCreateBusinessDate sets CreateBusinessDate field to given value.

### HasCreateBusinessDate

`func (o *MasterAccountSummaryType) HasCreateBusinessDate() bool`

HasCreateBusinessDate returns a boolean if a field has been set.

### GetCreateDateTime

`func (o *MasterAccountSummaryType) GetCreateDateTime() string`

GetCreateDateTime returns the CreateDateTime field if non-nil, zero value otherwise.

### GetCreateDateTimeOk

`func (o *MasterAccountSummaryType) GetCreateDateTimeOk() (*string, bool)`

GetCreateDateTimeOk returns a tuple with the CreateDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreateDateTime

`func (o *MasterAccountSummaryType) SetCreateDateTime(v string)`

SetCreateDateTime sets CreateDateTime field to given value.

### HasCreateDateTime

`func (o *MasterAccountSummaryType) HasCreateDateTime() bool`

HasCreateDateTime returns a boolean if a field has been set.

### GetCreatorId

`func (o *MasterAccountSummaryType) GetCreatorId() string`

GetCreatorId returns the CreatorId field if non-nil, zero value otherwise.

### GetCreatorIdOk

`func (o *MasterAccountSummaryType) GetCreatorIdOk() (*string, bool)`

GetCreatorIdOk returns a tuple with the CreatorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatorId

`func (o *MasterAccountSummaryType) SetCreatorId(v string)`

SetCreatorId sets CreatorId field to given value.

### HasCreatorId

`func (o *MasterAccountSummaryType) HasCreatorId() bool`

HasCreatorId returns a boolean if a field has been set.

### GetLastModifierId

`func (o *MasterAccountSummaryType) GetLastModifierId() string`

GetLastModifierId returns the LastModifierId field if non-nil, zero value otherwise.

### GetLastModifierIdOk

`func (o *MasterAccountSummaryType) GetLastModifierIdOk() (*string, bool)`

GetLastModifierIdOk returns a tuple with the LastModifierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifierId

`func (o *MasterAccountSummaryType) SetLastModifierId(v string)`

SetLastModifierId sets LastModifierId field to given value.

### HasLastModifierId

`func (o *MasterAccountSummaryType) HasLastModifierId() bool`

HasLastModifierId returns a boolean if a field has been set.

### GetLastModifyDateTime

`func (o *MasterAccountSummaryType) GetLastModifyDateTime() string`

GetLastModifyDateTime returns the LastModifyDateTime field if non-nil, zero value otherwise.

### GetLastModifyDateTimeOk

`func (o *MasterAccountSummaryType) GetLastModifyDateTimeOk() (*string, bool)`

GetLastModifyDateTimeOk returns a tuple with the LastModifyDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifyDateTime

`func (o *MasterAccountSummaryType) SetLastModifyDateTime(v string)`

SetLastModifyDateTime sets LastModifyDateTime field to given value.

### HasLastModifyDateTime

`func (o *MasterAccountSummaryType) HasLastModifyDateTime() bool`

HasLastModifyDateTime returns a boolean if a field has been set.

### GetPurgeDate

`func (o *MasterAccountSummaryType) GetPurgeDate() string`

GetPurgeDate returns the PurgeDate field if non-nil, zero value otherwise.

### GetPurgeDateOk

`func (o *MasterAccountSummaryType) GetPurgeDateOk() (*string, bool)`

GetPurgeDateOk returns a tuple with the PurgeDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPurgeDate

`func (o *MasterAccountSummaryType) SetPurgeDate(v string)`

SetPurgeDate sets PurgeDate field to given value.

### HasPurgeDate

`func (o *MasterAccountSummaryType) HasPurgeDate() bool`

HasPurgeDate returns a boolean if a field has been set.

### GetReservationIdList

`func (o *MasterAccountSummaryType) GetReservationIdList() ReservationIdList`

GetReservationIdList returns the ReservationIdList field if non-nil, zero value otherwise.

### GetReservationIdListOk

`func (o *MasterAccountSummaryType) GetReservationIdListOk() (*ReservationIdList, bool)`

GetReservationIdListOk returns a tuple with the ReservationIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationIdList

`func (o *MasterAccountSummaryType) SetReservationIdList(v ReservationIdList)`

SetReservationIdList sets ReservationIdList field to given value.

### HasReservationIdList

`func (o *MasterAccountSummaryType) HasReservationIdList() bool`

HasReservationIdList returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


