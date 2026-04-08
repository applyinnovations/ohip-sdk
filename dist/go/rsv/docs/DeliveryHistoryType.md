# DeliveryHistoryType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Hotel Code. | [optional] 
**ResvNameId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**DeliveryId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**DeliveryMethod** | Pointer to [**DeliveryMethodType**](DeliveryMethodType.md) |  | [optional] 
**InterfaceId** | Pointer to **string** | Interface Id. | [optional] 
**DeliveryStatus** | Pointer to [**StatusType**](StatusType.md) |  | [optional] 
**ErrorDescription** | Pointer to **string** | The error Description Of Reservation Delivery status | [optional] 
**RetryCount** | Pointer to **int32** | Retry Count | [optional] 
**DeliveryDate** | Pointer to **string** | Delivery Date. | [optional] 
**CreateDateTime** | Pointer to **string** | Time stamp of the creation. | [optional] 
**CreatorId** | Pointer to **string** | ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation. | [optional] 
**LastModifyDateTime** | Pointer to **string** | Time stamp of last modification. | [optional] 
**LastModifierId** | Pointer to **string** | Identifies the last software system or person to modify a record. | [optional] 
**PurgeDate** | Pointer to **string** | Date an item will be purged from a database (e.g., from a live database to an archive). | [optional] 

## Methods

### NewDeliveryHistoryType

`func NewDeliveryHistoryType() *DeliveryHistoryType`

NewDeliveryHistoryType instantiates a new DeliveryHistoryType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDeliveryHistoryTypeWithDefaults

`func NewDeliveryHistoryTypeWithDefaults() *DeliveryHistoryType`

NewDeliveryHistoryTypeWithDefaults instantiates a new DeliveryHistoryType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *DeliveryHistoryType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *DeliveryHistoryType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *DeliveryHistoryType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *DeliveryHistoryType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetResvNameId

`func (o *DeliveryHistoryType) GetResvNameId() UniqueIDType`

GetResvNameId returns the ResvNameId field if non-nil, zero value otherwise.

### GetResvNameIdOk

`func (o *DeliveryHistoryType) GetResvNameIdOk() (*UniqueIDType, bool)`

GetResvNameIdOk returns a tuple with the ResvNameId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResvNameId

`func (o *DeliveryHistoryType) SetResvNameId(v UniqueIDType)`

SetResvNameId sets ResvNameId field to given value.

### HasResvNameId

`func (o *DeliveryHistoryType) HasResvNameId() bool`

HasResvNameId returns a boolean if a field has been set.

### GetDeliveryId

`func (o *DeliveryHistoryType) GetDeliveryId() UniqueIDType`

GetDeliveryId returns the DeliveryId field if non-nil, zero value otherwise.

### GetDeliveryIdOk

`func (o *DeliveryHistoryType) GetDeliveryIdOk() (*UniqueIDType, bool)`

GetDeliveryIdOk returns a tuple with the DeliveryId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeliveryId

`func (o *DeliveryHistoryType) SetDeliveryId(v UniqueIDType)`

SetDeliveryId sets DeliveryId field to given value.

### HasDeliveryId

`func (o *DeliveryHistoryType) HasDeliveryId() bool`

HasDeliveryId returns a boolean if a field has been set.

### GetDeliveryMethod

`func (o *DeliveryHistoryType) GetDeliveryMethod() DeliveryMethodType`

GetDeliveryMethod returns the DeliveryMethod field if non-nil, zero value otherwise.

### GetDeliveryMethodOk

`func (o *DeliveryHistoryType) GetDeliveryMethodOk() (*DeliveryMethodType, bool)`

GetDeliveryMethodOk returns a tuple with the DeliveryMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeliveryMethod

`func (o *DeliveryHistoryType) SetDeliveryMethod(v DeliveryMethodType)`

SetDeliveryMethod sets DeliveryMethod field to given value.

### HasDeliveryMethod

`func (o *DeliveryHistoryType) HasDeliveryMethod() bool`

HasDeliveryMethod returns a boolean if a field has been set.

### GetInterfaceId

`func (o *DeliveryHistoryType) GetInterfaceId() string`

GetInterfaceId returns the InterfaceId field if non-nil, zero value otherwise.

### GetInterfaceIdOk

`func (o *DeliveryHistoryType) GetInterfaceIdOk() (*string, bool)`

GetInterfaceIdOk returns a tuple with the InterfaceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterfaceId

`func (o *DeliveryHistoryType) SetInterfaceId(v string)`

SetInterfaceId sets InterfaceId field to given value.

### HasInterfaceId

`func (o *DeliveryHistoryType) HasInterfaceId() bool`

HasInterfaceId returns a boolean if a field has been set.

### GetDeliveryStatus

`func (o *DeliveryHistoryType) GetDeliveryStatus() StatusType`

GetDeliveryStatus returns the DeliveryStatus field if non-nil, zero value otherwise.

### GetDeliveryStatusOk

`func (o *DeliveryHistoryType) GetDeliveryStatusOk() (*StatusType, bool)`

GetDeliveryStatusOk returns a tuple with the DeliveryStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeliveryStatus

`func (o *DeliveryHistoryType) SetDeliveryStatus(v StatusType)`

SetDeliveryStatus sets DeliveryStatus field to given value.

### HasDeliveryStatus

`func (o *DeliveryHistoryType) HasDeliveryStatus() bool`

HasDeliveryStatus returns a boolean if a field has been set.

### GetErrorDescription

`func (o *DeliveryHistoryType) GetErrorDescription() string`

GetErrorDescription returns the ErrorDescription field if non-nil, zero value otherwise.

### GetErrorDescriptionOk

`func (o *DeliveryHistoryType) GetErrorDescriptionOk() (*string, bool)`

GetErrorDescriptionOk returns a tuple with the ErrorDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorDescription

`func (o *DeliveryHistoryType) SetErrorDescription(v string)`

SetErrorDescription sets ErrorDescription field to given value.

### HasErrorDescription

`func (o *DeliveryHistoryType) HasErrorDescription() bool`

HasErrorDescription returns a boolean if a field has been set.

### GetRetryCount

`func (o *DeliveryHistoryType) GetRetryCount() int32`

GetRetryCount returns the RetryCount field if non-nil, zero value otherwise.

### GetRetryCountOk

`func (o *DeliveryHistoryType) GetRetryCountOk() (*int32, bool)`

GetRetryCountOk returns a tuple with the RetryCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRetryCount

`func (o *DeliveryHistoryType) SetRetryCount(v int32)`

SetRetryCount sets RetryCount field to given value.

### HasRetryCount

`func (o *DeliveryHistoryType) HasRetryCount() bool`

HasRetryCount returns a boolean if a field has been set.

### GetDeliveryDate

`func (o *DeliveryHistoryType) GetDeliveryDate() string`

GetDeliveryDate returns the DeliveryDate field if non-nil, zero value otherwise.

### GetDeliveryDateOk

`func (o *DeliveryHistoryType) GetDeliveryDateOk() (*string, bool)`

GetDeliveryDateOk returns a tuple with the DeliveryDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeliveryDate

`func (o *DeliveryHistoryType) SetDeliveryDate(v string)`

SetDeliveryDate sets DeliveryDate field to given value.

### HasDeliveryDate

`func (o *DeliveryHistoryType) HasDeliveryDate() bool`

HasDeliveryDate returns a boolean if a field has been set.

### GetCreateDateTime

`func (o *DeliveryHistoryType) GetCreateDateTime() string`

GetCreateDateTime returns the CreateDateTime field if non-nil, zero value otherwise.

### GetCreateDateTimeOk

`func (o *DeliveryHistoryType) GetCreateDateTimeOk() (*string, bool)`

GetCreateDateTimeOk returns a tuple with the CreateDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreateDateTime

`func (o *DeliveryHistoryType) SetCreateDateTime(v string)`

SetCreateDateTime sets CreateDateTime field to given value.

### HasCreateDateTime

`func (o *DeliveryHistoryType) HasCreateDateTime() bool`

HasCreateDateTime returns a boolean if a field has been set.

### GetCreatorId

`func (o *DeliveryHistoryType) GetCreatorId() string`

GetCreatorId returns the CreatorId field if non-nil, zero value otherwise.

### GetCreatorIdOk

`func (o *DeliveryHistoryType) GetCreatorIdOk() (*string, bool)`

GetCreatorIdOk returns a tuple with the CreatorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatorId

`func (o *DeliveryHistoryType) SetCreatorId(v string)`

SetCreatorId sets CreatorId field to given value.

### HasCreatorId

`func (o *DeliveryHistoryType) HasCreatorId() bool`

HasCreatorId returns a boolean if a field has been set.

### GetLastModifyDateTime

`func (o *DeliveryHistoryType) GetLastModifyDateTime() string`

GetLastModifyDateTime returns the LastModifyDateTime field if non-nil, zero value otherwise.

### GetLastModifyDateTimeOk

`func (o *DeliveryHistoryType) GetLastModifyDateTimeOk() (*string, bool)`

GetLastModifyDateTimeOk returns a tuple with the LastModifyDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifyDateTime

`func (o *DeliveryHistoryType) SetLastModifyDateTime(v string)`

SetLastModifyDateTime sets LastModifyDateTime field to given value.

### HasLastModifyDateTime

`func (o *DeliveryHistoryType) HasLastModifyDateTime() bool`

HasLastModifyDateTime returns a boolean if a field has been set.

### GetLastModifierId

`func (o *DeliveryHistoryType) GetLastModifierId() string`

GetLastModifierId returns the LastModifierId field if non-nil, zero value otherwise.

### GetLastModifierIdOk

`func (o *DeliveryHistoryType) GetLastModifierIdOk() (*string, bool)`

GetLastModifierIdOk returns a tuple with the LastModifierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifierId

`func (o *DeliveryHistoryType) SetLastModifierId(v string)`

SetLastModifierId sets LastModifierId field to given value.

### HasLastModifierId

`func (o *DeliveryHistoryType) HasLastModifierId() bool`

HasLastModifierId returns a boolean if a field has been set.

### GetPurgeDate

`func (o *DeliveryHistoryType) GetPurgeDate() string`

GetPurgeDate returns the PurgeDate field if non-nil, zero value otherwise.

### GetPurgeDateOk

`func (o *DeliveryHistoryType) GetPurgeDateOk() (*string, bool)`

GetPurgeDateOk returns a tuple with the PurgeDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPurgeDate

`func (o *DeliveryHistoryType) SetPurgeDate(v string)`

SetPurgeDate sets PurgeDate field to given value.

### HasPurgeDate

`func (o *DeliveryHistoryType) HasPurgeDate() bool`

HasPurgeDate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


