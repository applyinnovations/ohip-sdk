# RatePlanShortInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PrimaryDetails** | Pointer to [**RatePlanPrimaryDetailsType**](RatePlanPrimaryDetailsType.md) |  | [optional] 
**Classifications** | Pointer to [**RatePlanClassificationsType**](RatePlanClassificationsType.md) |  | [optional] 
**Descriptions** | Pointer to [**RatePlanDescriptionsType**](RatePlanDescriptionsType.md) |  | [optional] 
**ExternalAttributes** | Pointer to [**RatePlanExternalAttributesType**](RatePlanExternalAttributesType.md) |  | [optional] 
**HotelId** | Pointer to **string** |  | [optional] 
**RatePlanCode** | Pointer to **string** |  | [optional] 
**CreateDateTime** | Pointer to **string** | Time stamp of the creation. | [optional] 
**CreatorId** | Pointer to **string** | ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation. | [optional] 
**LastModifyDateTime** | Pointer to **string** | Time stamp of last modification. | [optional] 
**LastModifierId** | Pointer to **string** | Identifies the last software system or person to modify a record. | [optional] 
**PurgeDate** | Pointer to **string** | Date an item will be purged from a database (e.g., from a live database to an archive). | [optional] 
**DiscountAllowed** | Pointer to **bool** | Indicates whether the rate plan is allowed to be discounted. | [optional] 

## Methods

### NewRatePlanShortInfoType

`func NewRatePlanShortInfoType() *RatePlanShortInfoType`

NewRatePlanShortInfoType instantiates a new RatePlanShortInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRatePlanShortInfoTypeWithDefaults

`func NewRatePlanShortInfoTypeWithDefaults() *RatePlanShortInfoType`

NewRatePlanShortInfoTypeWithDefaults instantiates a new RatePlanShortInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPrimaryDetails

`func (o *RatePlanShortInfoType) GetPrimaryDetails() RatePlanPrimaryDetailsType`

GetPrimaryDetails returns the PrimaryDetails field if non-nil, zero value otherwise.

### GetPrimaryDetailsOk

`func (o *RatePlanShortInfoType) GetPrimaryDetailsOk() (*RatePlanPrimaryDetailsType, bool)`

GetPrimaryDetailsOk returns a tuple with the PrimaryDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimaryDetails

`func (o *RatePlanShortInfoType) SetPrimaryDetails(v RatePlanPrimaryDetailsType)`

SetPrimaryDetails sets PrimaryDetails field to given value.

### HasPrimaryDetails

`func (o *RatePlanShortInfoType) HasPrimaryDetails() bool`

HasPrimaryDetails returns a boolean if a field has been set.

### GetClassifications

`func (o *RatePlanShortInfoType) GetClassifications() RatePlanClassificationsType`

GetClassifications returns the Classifications field if non-nil, zero value otherwise.

### GetClassificationsOk

`func (o *RatePlanShortInfoType) GetClassificationsOk() (*RatePlanClassificationsType, bool)`

GetClassificationsOk returns a tuple with the Classifications field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClassifications

`func (o *RatePlanShortInfoType) SetClassifications(v RatePlanClassificationsType)`

SetClassifications sets Classifications field to given value.

### HasClassifications

`func (o *RatePlanShortInfoType) HasClassifications() bool`

HasClassifications returns a boolean if a field has been set.

### GetDescriptions

`func (o *RatePlanShortInfoType) GetDescriptions() RatePlanDescriptionsType`

GetDescriptions returns the Descriptions field if non-nil, zero value otherwise.

### GetDescriptionsOk

`func (o *RatePlanShortInfoType) GetDescriptionsOk() (*RatePlanDescriptionsType, bool)`

GetDescriptionsOk returns a tuple with the Descriptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescriptions

`func (o *RatePlanShortInfoType) SetDescriptions(v RatePlanDescriptionsType)`

SetDescriptions sets Descriptions field to given value.

### HasDescriptions

`func (o *RatePlanShortInfoType) HasDescriptions() bool`

HasDescriptions returns a boolean if a field has been set.

### GetExternalAttributes

`func (o *RatePlanShortInfoType) GetExternalAttributes() RatePlanExternalAttributesType`

GetExternalAttributes returns the ExternalAttributes field if non-nil, zero value otherwise.

### GetExternalAttributesOk

`func (o *RatePlanShortInfoType) GetExternalAttributesOk() (*RatePlanExternalAttributesType, bool)`

GetExternalAttributesOk returns a tuple with the ExternalAttributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalAttributes

`func (o *RatePlanShortInfoType) SetExternalAttributes(v RatePlanExternalAttributesType)`

SetExternalAttributes sets ExternalAttributes field to given value.

### HasExternalAttributes

`func (o *RatePlanShortInfoType) HasExternalAttributes() bool`

HasExternalAttributes returns a boolean if a field has been set.

### GetHotelId

`func (o *RatePlanShortInfoType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *RatePlanShortInfoType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *RatePlanShortInfoType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *RatePlanShortInfoType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetRatePlanCode

`func (o *RatePlanShortInfoType) GetRatePlanCode() string`

GetRatePlanCode returns the RatePlanCode field if non-nil, zero value otherwise.

### GetRatePlanCodeOk

`func (o *RatePlanShortInfoType) GetRatePlanCodeOk() (*string, bool)`

GetRatePlanCodeOk returns a tuple with the RatePlanCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanCode

`func (o *RatePlanShortInfoType) SetRatePlanCode(v string)`

SetRatePlanCode sets RatePlanCode field to given value.

### HasRatePlanCode

`func (o *RatePlanShortInfoType) HasRatePlanCode() bool`

HasRatePlanCode returns a boolean if a field has been set.

### GetCreateDateTime

`func (o *RatePlanShortInfoType) GetCreateDateTime() string`

GetCreateDateTime returns the CreateDateTime field if non-nil, zero value otherwise.

### GetCreateDateTimeOk

`func (o *RatePlanShortInfoType) GetCreateDateTimeOk() (*string, bool)`

GetCreateDateTimeOk returns a tuple with the CreateDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreateDateTime

`func (o *RatePlanShortInfoType) SetCreateDateTime(v string)`

SetCreateDateTime sets CreateDateTime field to given value.

### HasCreateDateTime

`func (o *RatePlanShortInfoType) HasCreateDateTime() bool`

HasCreateDateTime returns a boolean if a field has been set.

### GetCreatorId

`func (o *RatePlanShortInfoType) GetCreatorId() string`

GetCreatorId returns the CreatorId field if non-nil, zero value otherwise.

### GetCreatorIdOk

`func (o *RatePlanShortInfoType) GetCreatorIdOk() (*string, bool)`

GetCreatorIdOk returns a tuple with the CreatorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatorId

`func (o *RatePlanShortInfoType) SetCreatorId(v string)`

SetCreatorId sets CreatorId field to given value.

### HasCreatorId

`func (o *RatePlanShortInfoType) HasCreatorId() bool`

HasCreatorId returns a boolean if a field has been set.

### GetLastModifyDateTime

`func (o *RatePlanShortInfoType) GetLastModifyDateTime() string`

GetLastModifyDateTime returns the LastModifyDateTime field if non-nil, zero value otherwise.

### GetLastModifyDateTimeOk

`func (o *RatePlanShortInfoType) GetLastModifyDateTimeOk() (*string, bool)`

GetLastModifyDateTimeOk returns a tuple with the LastModifyDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifyDateTime

`func (o *RatePlanShortInfoType) SetLastModifyDateTime(v string)`

SetLastModifyDateTime sets LastModifyDateTime field to given value.

### HasLastModifyDateTime

`func (o *RatePlanShortInfoType) HasLastModifyDateTime() bool`

HasLastModifyDateTime returns a boolean if a field has been set.

### GetLastModifierId

`func (o *RatePlanShortInfoType) GetLastModifierId() string`

GetLastModifierId returns the LastModifierId field if non-nil, zero value otherwise.

### GetLastModifierIdOk

`func (o *RatePlanShortInfoType) GetLastModifierIdOk() (*string, bool)`

GetLastModifierIdOk returns a tuple with the LastModifierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifierId

`func (o *RatePlanShortInfoType) SetLastModifierId(v string)`

SetLastModifierId sets LastModifierId field to given value.

### HasLastModifierId

`func (o *RatePlanShortInfoType) HasLastModifierId() bool`

HasLastModifierId returns a boolean if a field has been set.

### GetPurgeDate

`func (o *RatePlanShortInfoType) GetPurgeDate() string`

GetPurgeDate returns the PurgeDate field if non-nil, zero value otherwise.

### GetPurgeDateOk

`func (o *RatePlanShortInfoType) GetPurgeDateOk() (*string, bool)`

GetPurgeDateOk returns a tuple with the PurgeDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPurgeDate

`func (o *RatePlanShortInfoType) SetPurgeDate(v string)`

SetPurgeDate sets PurgeDate field to given value.

### HasPurgeDate

`func (o *RatePlanShortInfoType) HasPurgeDate() bool`

HasPurgeDate returns a boolean if a field has been set.

### GetDiscountAllowed

`func (o *RatePlanShortInfoType) GetDiscountAllowed() bool`

GetDiscountAllowed returns the DiscountAllowed field if non-nil, zero value otherwise.

### GetDiscountAllowedOk

`func (o *RatePlanShortInfoType) GetDiscountAllowedOk() (*bool, bool)`

GetDiscountAllowedOk returns a tuple with the DiscountAllowed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDiscountAllowed

`func (o *RatePlanShortInfoType) SetDiscountAllowed(v bool)`

SetDiscountAllowed sets DiscountAllowed field to given value.

### HasDiscountAllowed

`func (o *RatePlanShortInfoType) HasDiscountAllowed() bool`

HasDiscountAllowed returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


