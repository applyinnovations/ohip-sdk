# HotelInterfaceErrorType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Hotel Code | [optional] 
**Logo** | Pointer to **string** | Hotel Interface Logo. On the database, this is also referred as DBF Logo. This is a three letter code followed by an underscore(_). This tells us which DBF files and log files with the prefix that IFC7 is going to create. | [optional] 
**ActionName** | Pointer to **string** | Action Name | [optional] 
**Message** | Pointer to **string** | Message | [optional] 
**Error** | Pointer to **string** | Error | [optional] 
**ResvNameId** | Pointer to **string** | Schema | [optional] 
**InsertDate** | Pointer to **time.Time** | Date time stamp of a Hotel Interface Schema. | [optional] 
**IfcType** | Pointer to **string** | ifcType | [optional] 

## Methods

### NewHotelInterfaceErrorType

`func NewHotelInterfaceErrorType() *HotelInterfaceErrorType`

NewHotelInterfaceErrorType instantiates a new HotelInterfaceErrorType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHotelInterfaceErrorTypeWithDefaults

`func NewHotelInterfaceErrorTypeWithDefaults() *HotelInterfaceErrorType`

NewHotelInterfaceErrorTypeWithDefaults instantiates a new HotelInterfaceErrorType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *HotelInterfaceErrorType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *HotelInterfaceErrorType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *HotelInterfaceErrorType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *HotelInterfaceErrorType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetLogo

`func (o *HotelInterfaceErrorType) GetLogo() string`

GetLogo returns the Logo field if non-nil, zero value otherwise.

### GetLogoOk

`func (o *HotelInterfaceErrorType) GetLogoOk() (*string, bool)`

GetLogoOk returns a tuple with the Logo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLogo

`func (o *HotelInterfaceErrorType) SetLogo(v string)`

SetLogo sets Logo field to given value.

### HasLogo

`func (o *HotelInterfaceErrorType) HasLogo() bool`

HasLogo returns a boolean if a field has been set.

### GetActionName

`func (o *HotelInterfaceErrorType) GetActionName() string`

GetActionName returns the ActionName field if non-nil, zero value otherwise.

### GetActionNameOk

`func (o *HotelInterfaceErrorType) GetActionNameOk() (*string, bool)`

GetActionNameOk returns a tuple with the ActionName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActionName

`func (o *HotelInterfaceErrorType) SetActionName(v string)`

SetActionName sets ActionName field to given value.

### HasActionName

`func (o *HotelInterfaceErrorType) HasActionName() bool`

HasActionName returns a boolean if a field has been set.

### GetMessage

`func (o *HotelInterfaceErrorType) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *HotelInterfaceErrorType) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *HotelInterfaceErrorType) SetMessage(v string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *HotelInterfaceErrorType) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### GetError

`func (o *HotelInterfaceErrorType) GetError() string`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *HotelInterfaceErrorType) GetErrorOk() (*string, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *HotelInterfaceErrorType) SetError(v string)`

SetError sets Error field to given value.

### HasError

`func (o *HotelInterfaceErrorType) HasError() bool`

HasError returns a boolean if a field has been set.

### GetResvNameId

`func (o *HotelInterfaceErrorType) GetResvNameId() string`

GetResvNameId returns the ResvNameId field if non-nil, zero value otherwise.

### GetResvNameIdOk

`func (o *HotelInterfaceErrorType) GetResvNameIdOk() (*string, bool)`

GetResvNameIdOk returns a tuple with the ResvNameId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResvNameId

`func (o *HotelInterfaceErrorType) SetResvNameId(v string)`

SetResvNameId sets ResvNameId field to given value.

### HasResvNameId

`func (o *HotelInterfaceErrorType) HasResvNameId() bool`

HasResvNameId returns a boolean if a field has been set.

### GetInsertDate

`func (o *HotelInterfaceErrorType) GetInsertDate() time.Time`

GetInsertDate returns the InsertDate field if non-nil, zero value otherwise.

### GetInsertDateOk

`func (o *HotelInterfaceErrorType) GetInsertDateOk() (*time.Time, bool)`

GetInsertDateOk returns a tuple with the InsertDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInsertDate

`func (o *HotelInterfaceErrorType) SetInsertDate(v time.Time)`

SetInsertDate sets InsertDate field to given value.

### HasInsertDate

`func (o *HotelInterfaceErrorType) HasInsertDate() bool`

HasInsertDate returns a boolean if a field has been set.

### GetIfcType

`func (o *HotelInterfaceErrorType) GetIfcType() string`

GetIfcType returns the IfcType field if non-nil, zero value otherwise.

### GetIfcTypeOk

`func (o *HotelInterfaceErrorType) GetIfcTypeOk() (*string, bool)`

GetIfcTypeOk returns a tuple with the IfcType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIfcType

`func (o *HotelInterfaceErrorType) SetIfcType(v string)`

SetIfcType sets IfcType field to given value.

### HasIfcType

`func (o *HotelInterfaceErrorType) HasIfcType() bool`

HasIfcType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


