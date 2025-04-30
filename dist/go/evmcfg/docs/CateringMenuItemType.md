# CateringMenuItemType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**HotelId** | Pointer to **string** | The Hotel code which the menu item class belongs to | [optional] 
**ClassInfo** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**DisplayOrder** | Pointer to **int32** | Defines the Display Order of the menu item class, to which the menu item is attached | [optional] 
**Name1** | Pointer to [**TranslationTextType2000**](TranslationTextType2000.md) |  | [optional] 
**Name2** | Pointer to [**TranslationTextType2000**](TranslationTextType2000.md) |  | [optional] 
**Name3** | Pointer to [**TranslationTextType2000**](TranslationTextType2000.md) |  | [optional] 
**Origin1** | Pointer to [**TranslationTextType2000**](TranslationTextType2000.md) |  | [optional] 
**Origin2** | Pointer to [**TranslationTextType2000**](TranslationTextType2000.md) |  | [optional] 
**MenuType** | Pointer to [**MenuTypeType**](MenuTypeType.md) |  | [optional] 
**Custom** | Pointer to **bool** | Indicates whether this menu item is custom | [optional] 
**Year** | Pointer to **int32** | This value is typically the year of the Wine | [optional] 
**Restriction** | Pointer to **string** | Any particular restriction description in 100 charactera | [optional] 
**Description** | Pointer to [**TranslationTextType2000**](TranslationTextType2000.md) |  | [optional] 
**DietaryPreferenceList** | Pointer to [**[]DietaryPrefType**](DietaryPrefType.md) |  | [optional] 
**EventTypes** | Pointer to **[]string** |  | [optional] 
**ResponsibleDepartments** | Pointer to **[]string** |  | [optional] 
**QuickInsertCode** | Pointer to **string** | Article number in Caps of menu item | [optional] 
**RevenueType** | Pointer to **string** | RevenueType of Menu Item | [optional] 
**SalesPrice** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**Cost** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**ItemConsumption** | Pointer to **bool** | Selection of this notes that the price defined is charged &#39;as-consumed&#39; basis | [optional] 
**Container** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**Portion** | Pointer to [**TranslationTextType2000**](TranslationTextType2000.md) |  | [optional] 
**Servings** | Pointer to **int32** | Numeric value of servings of Menu item | [optional] 
**WebBookable** | Pointer to **bool** | Check of Menu Item if it is web bookable | [optional] 
**Print** | Pointer to **bool** | check if Print action is required for menu item | [optional] 
**Inactive** | Pointer to **bool** | Check for the status of menu item | [optional] 
**IncludedYN** | Pointer to **bool** | Included flag | [optional] 

## Methods

### NewCateringMenuItemType

`func NewCateringMenuItemType() *CateringMenuItemType`

NewCateringMenuItemType instantiates a new CateringMenuItemType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCateringMenuItemTypeWithDefaults

`func NewCateringMenuItemTypeWithDefaults() *CateringMenuItemType`

NewCateringMenuItemTypeWithDefaults instantiates a new CateringMenuItemType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *CateringMenuItemType) GetId() UniqueIDType`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CateringMenuItemType) GetIdOk() (*UniqueIDType, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CateringMenuItemType) SetId(v UniqueIDType)`

SetId sets Id field to given value.

### HasId

`func (o *CateringMenuItemType) HasId() bool`

HasId returns a boolean if a field has been set.

### GetHotelId

`func (o *CateringMenuItemType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *CateringMenuItemType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *CateringMenuItemType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *CateringMenuItemType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetClassInfo

`func (o *CateringMenuItemType) GetClassInfo() CodeDescriptionType`

GetClassInfo returns the ClassInfo field if non-nil, zero value otherwise.

### GetClassInfoOk

`func (o *CateringMenuItemType) GetClassInfoOk() (*CodeDescriptionType, bool)`

GetClassInfoOk returns a tuple with the ClassInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClassInfo

`func (o *CateringMenuItemType) SetClassInfo(v CodeDescriptionType)`

SetClassInfo sets ClassInfo field to given value.

### HasClassInfo

`func (o *CateringMenuItemType) HasClassInfo() bool`

HasClassInfo returns a boolean if a field has been set.

### GetDisplayOrder

`func (o *CateringMenuItemType) GetDisplayOrder() int32`

GetDisplayOrder returns the DisplayOrder field if non-nil, zero value otherwise.

### GetDisplayOrderOk

`func (o *CateringMenuItemType) GetDisplayOrderOk() (*int32, bool)`

GetDisplayOrderOk returns a tuple with the DisplayOrder field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayOrder

`func (o *CateringMenuItemType) SetDisplayOrder(v int32)`

SetDisplayOrder sets DisplayOrder field to given value.

### HasDisplayOrder

`func (o *CateringMenuItemType) HasDisplayOrder() bool`

HasDisplayOrder returns a boolean if a field has been set.

### GetName1

`func (o *CateringMenuItemType) GetName1() TranslationTextType2000`

GetName1 returns the Name1 field if non-nil, zero value otherwise.

### GetName1Ok

`func (o *CateringMenuItemType) GetName1Ok() (*TranslationTextType2000, bool)`

GetName1Ok returns a tuple with the Name1 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName1

`func (o *CateringMenuItemType) SetName1(v TranslationTextType2000)`

SetName1 sets Name1 field to given value.

### HasName1

`func (o *CateringMenuItemType) HasName1() bool`

HasName1 returns a boolean if a field has been set.

### GetName2

`func (o *CateringMenuItemType) GetName2() TranslationTextType2000`

GetName2 returns the Name2 field if non-nil, zero value otherwise.

### GetName2Ok

`func (o *CateringMenuItemType) GetName2Ok() (*TranslationTextType2000, bool)`

GetName2Ok returns a tuple with the Name2 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName2

`func (o *CateringMenuItemType) SetName2(v TranslationTextType2000)`

SetName2 sets Name2 field to given value.

### HasName2

`func (o *CateringMenuItemType) HasName2() bool`

HasName2 returns a boolean if a field has been set.

### GetName3

`func (o *CateringMenuItemType) GetName3() TranslationTextType2000`

GetName3 returns the Name3 field if non-nil, zero value otherwise.

### GetName3Ok

`func (o *CateringMenuItemType) GetName3Ok() (*TranslationTextType2000, bool)`

GetName3Ok returns a tuple with the Name3 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName3

`func (o *CateringMenuItemType) SetName3(v TranslationTextType2000)`

SetName3 sets Name3 field to given value.

### HasName3

`func (o *CateringMenuItemType) HasName3() bool`

HasName3 returns a boolean if a field has been set.

### GetOrigin1

`func (o *CateringMenuItemType) GetOrigin1() TranslationTextType2000`

GetOrigin1 returns the Origin1 field if non-nil, zero value otherwise.

### GetOrigin1Ok

`func (o *CateringMenuItemType) GetOrigin1Ok() (*TranslationTextType2000, bool)`

GetOrigin1Ok returns a tuple with the Origin1 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrigin1

`func (o *CateringMenuItemType) SetOrigin1(v TranslationTextType2000)`

SetOrigin1 sets Origin1 field to given value.

### HasOrigin1

`func (o *CateringMenuItemType) HasOrigin1() bool`

HasOrigin1 returns a boolean if a field has been set.

### GetOrigin2

`func (o *CateringMenuItemType) GetOrigin2() TranslationTextType2000`

GetOrigin2 returns the Origin2 field if non-nil, zero value otherwise.

### GetOrigin2Ok

`func (o *CateringMenuItemType) GetOrigin2Ok() (*TranslationTextType2000, bool)`

GetOrigin2Ok returns a tuple with the Origin2 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrigin2

`func (o *CateringMenuItemType) SetOrigin2(v TranslationTextType2000)`

SetOrigin2 sets Origin2 field to given value.

### HasOrigin2

`func (o *CateringMenuItemType) HasOrigin2() bool`

HasOrigin2 returns a boolean if a field has been set.

### GetMenuType

`func (o *CateringMenuItemType) GetMenuType() MenuTypeType`

GetMenuType returns the MenuType field if non-nil, zero value otherwise.

### GetMenuTypeOk

`func (o *CateringMenuItemType) GetMenuTypeOk() (*MenuTypeType, bool)`

GetMenuTypeOk returns a tuple with the MenuType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMenuType

`func (o *CateringMenuItemType) SetMenuType(v MenuTypeType)`

SetMenuType sets MenuType field to given value.

### HasMenuType

`func (o *CateringMenuItemType) HasMenuType() bool`

HasMenuType returns a boolean if a field has been set.

### GetCustom

`func (o *CateringMenuItemType) GetCustom() bool`

GetCustom returns the Custom field if non-nil, zero value otherwise.

### GetCustomOk

`func (o *CateringMenuItemType) GetCustomOk() (*bool, bool)`

GetCustomOk returns a tuple with the Custom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustom

`func (o *CateringMenuItemType) SetCustom(v bool)`

SetCustom sets Custom field to given value.

### HasCustom

`func (o *CateringMenuItemType) HasCustom() bool`

HasCustom returns a boolean if a field has been set.

### GetYear

`func (o *CateringMenuItemType) GetYear() int32`

GetYear returns the Year field if non-nil, zero value otherwise.

### GetYearOk

`func (o *CateringMenuItemType) GetYearOk() (*int32, bool)`

GetYearOk returns a tuple with the Year field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetYear

`func (o *CateringMenuItemType) SetYear(v int32)`

SetYear sets Year field to given value.

### HasYear

`func (o *CateringMenuItemType) HasYear() bool`

HasYear returns a boolean if a field has been set.

### GetRestriction

`func (o *CateringMenuItemType) GetRestriction() string`

GetRestriction returns the Restriction field if non-nil, zero value otherwise.

### GetRestrictionOk

`func (o *CateringMenuItemType) GetRestrictionOk() (*string, bool)`

GetRestrictionOk returns a tuple with the Restriction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRestriction

`func (o *CateringMenuItemType) SetRestriction(v string)`

SetRestriction sets Restriction field to given value.

### HasRestriction

`func (o *CateringMenuItemType) HasRestriction() bool`

HasRestriction returns a boolean if a field has been set.

### GetDescription

`func (o *CateringMenuItemType) GetDescription() TranslationTextType2000`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *CateringMenuItemType) GetDescriptionOk() (*TranslationTextType2000, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *CateringMenuItemType) SetDescription(v TranslationTextType2000)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *CateringMenuItemType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetDietaryPreferenceList

`func (o *CateringMenuItemType) GetDietaryPreferenceList() []DietaryPrefType`

GetDietaryPreferenceList returns the DietaryPreferenceList field if non-nil, zero value otherwise.

### GetDietaryPreferenceListOk

`func (o *CateringMenuItemType) GetDietaryPreferenceListOk() (*[]DietaryPrefType, bool)`

GetDietaryPreferenceListOk returns a tuple with the DietaryPreferenceList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDietaryPreferenceList

`func (o *CateringMenuItemType) SetDietaryPreferenceList(v []DietaryPrefType)`

SetDietaryPreferenceList sets DietaryPreferenceList field to given value.

### HasDietaryPreferenceList

`func (o *CateringMenuItemType) HasDietaryPreferenceList() bool`

HasDietaryPreferenceList returns a boolean if a field has been set.

### GetEventTypes

`func (o *CateringMenuItemType) GetEventTypes() []string`

GetEventTypes returns the EventTypes field if non-nil, zero value otherwise.

### GetEventTypesOk

`func (o *CateringMenuItemType) GetEventTypesOk() (*[]string, bool)`

GetEventTypesOk returns a tuple with the EventTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventTypes

`func (o *CateringMenuItemType) SetEventTypes(v []string)`

SetEventTypes sets EventTypes field to given value.

### HasEventTypes

`func (o *CateringMenuItemType) HasEventTypes() bool`

HasEventTypes returns a boolean if a field has been set.

### GetResponsibleDepartments

`func (o *CateringMenuItemType) GetResponsibleDepartments() []string`

GetResponsibleDepartments returns the ResponsibleDepartments field if non-nil, zero value otherwise.

### GetResponsibleDepartmentsOk

`func (o *CateringMenuItemType) GetResponsibleDepartmentsOk() (*[]string, bool)`

GetResponsibleDepartmentsOk returns a tuple with the ResponsibleDepartments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResponsibleDepartments

`func (o *CateringMenuItemType) SetResponsibleDepartments(v []string)`

SetResponsibleDepartments sets ResponsibleDepartments field to given value.

### HasResponsibleDepartments

`func (o *CateringMenuItemType) HasResponsibleDepartments() bool`

HasResponsibleDepartments returns a boolean if a field has been set.

### GetQuickInsertCode

`func (o *CateringMenuItemType) GetQuickInsertCode() string`

GetQuickInsertCode returns the QuickInsertCode field if non-nil, zero value otherwise.

### GetQuickInsertCodeOk

`func (o *CateringMenuItemType) GetQuickInsertCodeOk() (*string, bool)`

GetQuickInsertCodeOk returns a tuple with the QuickInsertCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuickInsertCode

`func (o *CateringMenuItemType) SetQuickInsertCode(v string)`

SetQuickInsertCode sets QuickInsertCode field to given value.

### HasQuickInsertCode

`func (o *CateringMenuItemType) HasQuickInsertCode() bool`

HasQuickInsertCode returns a boolean if a field has been set.

### GetRevenueType

`func (o *CateringMenuItemType) GetRevenueType() string`

GetRevenueType returns the RevenueType field if non-nil, zero value otherwise.

### GetRevenueTypeOk

`func (o *CateringMenuItemType) GetRevenueTypeOk() (*string, bool)`

GetRevenueTypeOk returns a tuple with the RevenueType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenueType

`func (o *CateringMenuItemType) SetRevenueType(v string)`

SetRevenueType sets RevenueType field to given value.

### HasRevenueType

`func (o *CateringMenuItemType) HasRevenueType() bool`

HasRevenueType returns a boolean if a field has been set.

### GetSalesPrice

`func (o *CateringMenuItemType) GetSalesPrice() CurrencyAmountType`

GetSalesPrice returns the SalesPrice field if non-nil, zero value otherwise.

### GetSalesPriceOk

`func (o *CateringMenuItemType) GetSalesPriceOk() (*CurrencyAmountType, bool)`

GetSalesPriceOk returns a tuple with the SalesPrice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSalesPrice

`func (o *CateringMenuItemType) SetSalesPrice(v CurrencyAmountType)`

SetSalesPrice sets SalesPrice field to given value.

### HasSalesPrice

`func (o *CateringMenuItemType) HasSalesPrice() bool`

HasSalesPrice returns a boolean if a field has been set.

### GetCost

`func (o *CateringMenuItemType) GetCost() CurrencyAmountType`

GetCost returns the Cost field if non-nil, zero value otherwise.

### GetCostOk

`func (o *CateringMenuItemType) GetCostOk() (*CurrencyAmountType, bool)`

GetCostOk returns a tuple with the Cost field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCost

`func (o *CateringMenuItemType) SetCost(v CurrencyAmountType)`

SetCost sets Cost field to given value.

### HasCost

`func (o *CateringMenuItemType) HasCost() bool`

HasCost returns a boolean if a field has been set.

### GetItemConsumption

`func (o *CateringMenuItemType) GetItemConsumption() bool`

GetItemConsumption returns the ItemConsumption field if non-nil, zero value otherwise.

### GetItemConsumptionOk

`func (o *CateringMenuItemType) GetItemConsumptionOk() (*bool, bool)`

GetItemConsumptionOk returns a tuple with the ItemConsumption field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItemConsumption

`func (o *CateringMenuItemType) SetItemConsumption(v bool)`

SetItemConsumption sets ItemConsumption field to given value.

### HasItemConsumption

`func (o *CateringMenuItemType) HasItemConsumption() bool`

HasItemConsumption returns a boolean if a field has been set.

### GetContainer

`func (o *CateringMenuItemType) GetContainer() CodeDescriptionType`

GetContainer returns the Container field if non-nil, zero value otherwise.

### GetContainerOk

`func (o *CateringMenuItemType) GetContainerOk() (*CodeDescriptionType, bool)`

GetContainerOk returns a tuple with the Container field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContainer

`func (o *CateringMenuItemType) SetContainer(v CodeDescriptionType)`

SetContainer sets Container field to given value.

### HasContainer

`func (o *CateringMenuItemType) HasContainer() bool`

HasContainer returns a boolean if a field has been set.

### GetPortion

`func (o *CateringMenuItemType) GetPortion() TranslationTextType2000`

GetPortion returns the Portion field if non-nil, zero value otherwise.

### GetPortionOk

`func (o *CateringMenuItemType) GetPortionOk() (*TranslationTextType2000, bool)`

GetPortionOk returns a tuple with the Portion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPortion

`func (o *CateringMenuItemType) SetPortion(v TranslationTextType2000)`

SetPortion sets Portion field to given value.

### HasPortion

`func (o *CateringMenuItemType) HasPortion() bool`

HasPortion returns a boolean if a field has been set.

### GetServings

`func (o *CateringMenuItemType) GetServings() int32`

GetServings returns the Servings field if non-nil, zero value otherwise.

### GetServingsOk

`func (o *CateringMenuItemType) GetServingsOk() (*int32, bool)`

GetServingsOk returns a tuple with the Servings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServings

`func (o *CateringMenuItemType) SetServings(v int32)`

SetServings sets Servings field to given value.

### HasServings

`func (o *CateringMenuItemType) HasServings() bool`

HasServings returns a boolean if a field has been set.

### GetWebBookable

`func (o *CateringMenuItemType) GetWebBookable() bool`

GetWebBookable returns the WebBookable field if non-nil, zero value otherwise.

### GetWebBookableOk

`func (o *CateringMenuItemType) GetWebBookableOk() (*bool, bool)`

GetWebBookableOk returns a tuple with the WebBookable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWebBookable

`func (o *CateringMenuItemType) SetWebBookable(v bool)`

SetWebBookable sets WebBookable field to given value.

### HasWebBookable

`func (o *CateringMenuItemType) HasWebBookable() bool`

HasWebBookable returns a boolean if a field has been set.

### GetPrint

`func (o *CateringMenuItemType) GetPrint() bool`

GetPrint returns the Print field if non-nil, zero value otherwise.

### GetPrintOk

`func (o *CateringMenuItemType) GetPrintOk() (*bool, bool)`

GetPrintOk returns a tuple with the Print field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrint

`func (o *CateringMenuItemType) SetPrint(v bool)`

SetPrint sets Print field to given value.

### HasPrint

`func (o *CateringMenuItemType) HasPrint() bool`

HasPrint returns a boolean if a field has been set.

### GetInactive

`func (o *CateringMenuItemType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *CateringMenuItemType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *CateringMenuItemType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *CateringMenuItemType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.

### GetIncludedYN

`func (o *CateringMenuItemType) GetIncludedYN() bool`

GetIncludedYN returns the IncludedYN field if non-nil, zero value otherwise.

### GetIncludedYNOk

`func (o *CateringMenuItemType) GetIncludedYNOk() (*bool, bool)`

GetIncludedYNOk returns a tuple with the IncludedYN field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludedYN

`func (o *CateringMenuItemType) SetIncludedYN(v bool)`

SetIncludedYN sets IncludedYN field to given value.

### HasIncludedYN

`func (o *CateringMenuItemType) HasIncludedYN() bool`

HasIncludedYN returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


